import React from "react";

import styles from "./WeekDayBox.module.css";

const WeekDayBox = ({ date, mainConditionIcon, temperature }) => {
  return (
    <div className={styles.root}>
      <div className={styles.date}>{date}</div>
      <img
        src={`http://openweathermap.org/img/wn/${mainConditionIcon}.png`}
        alt="weather condition icon"
        className={styles.icon}
      />
      <div className={styles.temperature}>
        <span>{temperature}</span>
        <sup>°</sup>
      </div>
    </div>
  );
};

export default WeekDayBox;
