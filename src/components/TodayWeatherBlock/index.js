import React, { useCallback } from "react";
import { format } from "date-fns";

import MainConditionBox from "components/MainConditionBox";
import BasicConditionBox from "components/BasicConditionBox";

import styles from "./TodayWeatherBlock.module.css";

const TodayWeatherBlock = ({ data }) => {
  const { city, list } = data;
  const today = list.slice(0, 1)[0];
  console.log(today);

  const formatDate = useCallback((date) => {
    return format(new Date(date), "MM/dd/yyyy");
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.topBlocks}>
        <div>
          <div className={styles.city}>{city.name}</div>
          <div className={styles.date}>{formatDate(today.dt_txt)}</div>
        </div>
        <MainConditionBox mainCondition={today.weather[0]} />
      </div>
      <div className={styles.bottomBlocks}>
        <BasicConditionBox
          type="temperature"
          condition={Math.floor(today.main.temp)}
        />
        <BasicConditionBox type="humidity" condition={today.main.humidity} />
        <BasicConditionBox type="wind" condition={today.wind.speed} />
      </div>
    </div>
  );
};

export default TodayWeatherBlock;
