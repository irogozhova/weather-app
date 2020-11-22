import React from "react";

import styles from "./MainConditionBox.module.css";

const MainConditionBox = ({ mainCondition }) => {
  const { description, icon } = mainCondition;

  return (
    <div className={styles.root}>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        className={styles.icon}
      />
      <div>{description}</div>
    </div>
  );
};

export default MainConditionBox;
