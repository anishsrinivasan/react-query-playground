import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import PostList from "../../modules/PostList";

function Home() {
  console.log("IS HOME RE-RENDERING?");
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>React Query</h1>
          <NetworkChecker />
        </div>
        <PostList />
      </div>
    </div>
  );
}

function NetworkChecker() {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });
  console.log("Check online", isOnline);
  return (
    <div className={styles.networkChecker}>
      Network Status :{" "}
      {isOnline ? (
        <span className={[styles.networkChipOnline]}>Online</span>
      ) : (
        <span className={[styles.networkChipOffline]}>Offline</span>
      )}
    </div>
  );
}

export default Home;
