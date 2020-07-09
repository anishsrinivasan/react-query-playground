import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import CountUp from "react-countup";
import Axios from "axios";

const loaderTimer = 2000;

const Footer = () => (
  <div className={styles.footer}>
    <div>
      <p>
        Crowdsourced Patient Databse API from{" "}
        <a href="https://github.com/covid19india/api" target="_blank">
          Covid19API
        </a>
      </p>
    </div>

    <div>
      <p>Stay Home, Kids</p>
    </div>

    <div>
      <p>
        Developed by{" "}
        <a href="https://slarity.com" target="_blank">
          Slarity
        </a>
      </p>
    </div>
  </div>
);

const skeletonStyle = {
  marginBottom: 20,
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

const CovidTable = ({ list, isLoading }) => {
  if (isLoading) {
    return <TableSkeleton />;
  }
  return (
    <Grid container style={{ overflow: "auto" }}>
      <Grid item xs={12}>
        <Table className={styles.covidTable}>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Confirmed</TableCell>
              <TableCell>Deaths</TableCell>
              <TableCell>Recovered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.active}</TableCell>
                <TableCell>{row.confirmed}</TableCell>
                <TableCell>{row.deaths}</TableCell>
                <TableCell>{row.recovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

const CounterBox = ({ data, isLoading }) => {
  return (
    <div className={styles.totalCounterBox}>
      <CountBox
        title="Confirmed"
        count={data.confirmed}
        isLoading={isLoading}
      />
      <CountBox title="Active" count={data.active} isLoading={isLoading} />
      <CountBox
        title="Recovered"
        count={data.recovered}
        isLoading={isLoading}
      />
      <CountBox title="Deaths" count={data.deaths} isLoading={isLoading} />
    </div>
  );
};

const CountBox = ({ title, count, isLoading }) => {
  if (!title || !count || isLoading) {
    return (
      <Skeleton
        className={`${styles.countBox} ${styles.isGrey}`}
        animation="wave"
        height={80}
      />
    );
  }

  let variantClass = "";

  if (title === "Confirmed") {
    variantClass = "isRed";
  }
  if (title === "Active") {
    variantClass = "isBlue";
  }
  if (title === "Recovered") {
    variantClass = "isGreen";
  }
  if (title === "Deaths") {
    variantClass = "isGrey";
  }

  return (
    <div className={`${styles.countBox} ${styles[variantClass]}`}>
      <h6>{title}</h6>
      <h1>
        <CountUp end={count} />
      </h1>
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: [],
      inactiveList: [],
      totalObject: {
        active: 0,
        deaths: 0,
        recovered: 0,
        confirmed: 0,
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const url = `https://api.covid19india.org/data.json`;
      const response = await Axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        const stateweise = data && data.statewise ? data.statewise : [];
        const {
          activeList,
          inactiveList,
          totalObject,
        } = this.parseStateWiseData(stateweise);
        const sortedList = activeList.sort((a, b) => a.confirmed - b.confirmed);
        this.setState({ activeList: sortedList, inactiveList, totalObject });
      } else {
        console.log("Something Went Wrong with Getting Data");
      }

      this.setLoading();
    } catch (err) {
      console.log("getDataErr", err);
      this.setLoading();
    }
  }

  setLoading = (isLoading) => {
    setTimeout(() => {
      this.setState({ isLoading: isLoading || false });
    }, loaderTimer);
  };

  parseStateWiseData(data) {
    try {
      let activeList = [],
        inactiveList = [],
        totalObject = null;
      for (let i = 0; i < data.length; i++) {
        const a = data[i];
        if (a.state !== "Total") {
          if (a.active > 0) {
            activeList.push(a);
          } else {
            inactiveList.push(a);
          }
        } else {
          totalObject = a;
        }
      }
      return {
        activeList,
        inactiveList,
        totalObject,
      };
    } catch (err) {
      console.log("parseStateWiseDataErr", err, data);
      return { activeList: [], inactiveList: [], totalObject: {} };
    }
  }

  render() {
    const { isLoading, activeList, inactiveList, totalObject } = this.state;
    return (
      <Fragment>
        <div className={styles.homeContainer}>
          <div>
            <h1 className={styles.headingText}>COVID 19 - India</h1>

            <CounterBox data={totalObject} isLoading={isLoading} />

            {inactiveList.length > 0 ? (
              <div className={styles.covidTableBox}>
                <h1>Knockout Stage</h1>
                <CovidTable list={inactiveList} isLoading={isLoading} />
              </div>
            ) : (
              <div />
            )}

            <div className={styles.covidTableBox}>
              <h1>Poll Stage</h1>
              <CovidTable list={activeList} isLoading={isLoading} />
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}
export default Home;
