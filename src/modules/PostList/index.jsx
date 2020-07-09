import React, { Fragment, useState } from "react";
import styles from "./index.module.css";

import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  TablePagination,
  TableFooter,
  CircularProgress,
} from "@material-ui/core";

import { usePaginatedQuery, useMutation, queryCache } from "react-query";
import { openSnackbar } from "../../components/snackbar/index";

Axios.defaults.baseURL = "http://localhost:5000"; // the prefix of the URL

const skeletonStyle = {
  marginBottom: 20,
};

const FetchingLoader = ({ isFetching }) => {
  if (!isFetching) {
    return <div className={styles.circularProgressContainer} />;
  }
  return (
    <div className={styles.circularProgressContainer}>
      <CircularProgress />
      <p style={{ marginLeft: 20 }}>Refreshing Data</p>
    </div>
  );
};

const TableSkeleton = () => (
  <Fragment>
    <Skeleton
      style={skeletonStyle}
      animation="wave"
      variant="rect"
      height={40}
    />
    <Skeleton style={skeletonStyle} variant="rect" height={40} />
    <Skeleton
      style={skeletonStyle}
      animation="wave"
      variant="rect"
      height={40}
    />
    <Skeleton style={skeletonStyle} variant="rect" height={40} />
    <Skeleton
      style={skeletonStyle}
      animation="wave"
      variant="rect"
      height={40}
    />
    <Skeleton style={skeletonStyle} variant="rect" height={40} />
  </Fragment>
);

function PostTable({
  list,
  page,
  limit,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <Grid container style={{ overflow: "auto" }}>
      <Grid item xs={12}>
        <Table className={styles.covidTable}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row, index) => (
              <TableRow
                key={index}
                style={row.isMutating ? { background: "#dcdcdc" } : {}}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.isMutating ? "Adding" : "Added"}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={100}
                rowsPerPage={limit}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Grid>
    </Grid>
  );
}

const AddPost = ({ onClick }) => {
  return (
    <div className={styles.addPostContainer}>
      <div className={styles.addPostButton} onClick={() => onClick()}>
        Add Post
      </div>
    </div>
  );
};

function PostList() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const queryKey = ["posts", { page, limit }];
  const { status, resolvedData, isFetching, error } = usePaginatedQuery(
    queryKey,
    getPosts,
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  const [mutate] = useMutation(createPost, {
    onMutate: (post) => {
      queryCache.cancelQueries(queryKey);
      const newPost = { ...post, id: "..", isMutating: true };
      // Snapshot the previous value
      const previousTodos = queryCache.getQueryData(queryKey);

      // Optimistically update to the new value
      queryCache.setQueryData(queryKey, (old) => [newPost, ...old]);

      // Return the snapshotted value
      return () => queryCache.setQueryData(queryKey, previousTodos);
    },
    // On failure, roll back to the previous value
    onError: async (err, newTodo, rollback) => {
      console.log("On Mutate Err", err);
      await sleep(2000);
      openSnackbar({
        message: "Something went wrong, Rolling Back",
        variant: "error",
      });

      return rollback();
    },
    // After success or failure, refetch the todos query
    onSettled: (data, error) => {
      // console.log("On Settled", data, error);
      if (!error) {
        queryCache.invalidateQueries(queryKey);
        openSnackbar({
          message: "Post Added",
          variant: "success",
        });
      }
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit);
  };

  if (status === "loading") {
    return (
      <div className={styles.postTableContainer}>
        <TableSkeleton />
      </div>
    );
  }

  if (error)
    return (
      <div>
        <h1>Oops, Something went wrong!</h1>
      </div>
    );

  return (
    <div className={styles.postTableContainer}>
      <FetchingLoader isFetching={isFetching} />
      <AddPost
        onClick={() =>
          mutate({
            title: "Hello World1",
            userId: 2,
          })
        }
      />
      <PostTable
        list={resolvedData}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        limit={limit}
        isFetching={isFetching}
      />
    </div>
  );
}

async function getPosts(key, { page, limit }) {
  page = page || 0;
  limit = limit || 5;
  const start = page * limit;
  const response = await Axios.get(`/posts?_start=${start}&_limit=${limit}`);
  await sleep(1000);
  const posts = response.data.data;
  return posts;
}

function createPost(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Creating Post", payload);
      const response = await Axios.post(`/posts`, payload, { timeout: 5000 });
      if (response.data && response.data.code === 200) {
        resolve(response.data.data);
      } else {
        reject("Something went wrong");
      }
    } catch (err) {
      console.log("Err", err);
      reject(err);
    }
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default PostList;
