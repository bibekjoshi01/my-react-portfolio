import React from "react";
import styles from "./Header.module.scss";

function index(props) {
  const { handlePage } = props;

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={`${styles.btn} ${styles.red}`}></div>
        <div className={`${styles.btn} ${styles.yellow}`}></div>
        <div className={`${styles.btn} ${styles.green}`}></div>
      </div>
      <div className={styles.right}>
        <button
          onClick={() => handlePage("home")}
          className={`${styles.menu} ${styles.home}`}
        >
          Overview
        </button>
        <button
          onClick={() => handlePage("projects")}
          className={`${styles.menu} ${styles.projects}`}
        >
          Projects
        </button>
        <button
          onClick={() => handlePage("contact")}
          className={`${styles.menu} ${styles.contact}`}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default index;
