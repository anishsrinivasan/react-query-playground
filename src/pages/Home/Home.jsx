import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Animoji from "../../assets/images/anish_emoji.png";
function CoverSection() {
  return (
    <section>
      <div className={styles.coverSecton + " fade-in"}>
        <p className={styles.center}>
          <img className={styles.animojiImg} src={Animoji} />
        </p>

        <div className={styles.coverInfo}>
          <h1 className={styles.coverTitle}>
            Hi, I am <strong>Anish Srinivasan</strong>
          </h1>
          <h2 className={styles.coverSubTitle}>
            Full Stack <strong>Developer</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <CoverSection />
      </div>
    </div>
  );
}

export default Home;
