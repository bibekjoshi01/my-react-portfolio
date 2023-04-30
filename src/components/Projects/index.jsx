import React from "react";
import styles from "./Projects.module.scss";
import Header from "../Header";

function index(props) {
  const { handlePage } = props;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* header start */}
        <Header handlePage={handlePage} />
        {/* header end */}

        {/* content start */}
        <div className={styles.content}>
          <h1>No Projects Added.</h1>
        </div>
        {/* content end */}
      </div>
    </div>
  );
}

export default index;
