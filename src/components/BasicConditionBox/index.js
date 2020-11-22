import React from "react";
import { ReactComponent as TemperatureIcon } from "icons/thermometer.svg";
import { ReactComponent as HumidityIcon } from "icons/humidity.svg";
import { ReactComponent as WindIcon } from "icons/wind.svg";

import styles from "./BasicConditionBox.module.css";

const getIcon = (type) => {
  switch (type) {
    case "temperature":
      return <TemperatureIcon />;
    case "humidity":
      return <HumidityIcon />;
    case "wind":
      return <WindIcon />;
    default:
      return <TemperatureIcon />;
  }
};

const BasicConditionBox = ({ type, condition }) => {
  return (
    <div className={styles.root}>
      {getIcon(type)}
      <div className={styles.value}>{condition}</div>
    </div>
  );
};

export default BasicConditionBox;
