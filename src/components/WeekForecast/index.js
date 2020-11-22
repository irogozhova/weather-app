import React, { useCallback } from "react";
import { format } from "date-fns";

import WeekDayBox from "components/WeekDayBox";

import styles from "./WeekForecast.module.css";

const WeekForecast = ({ data }) => {
  console.log(data);

  const formatDate = useCallback((date) => {
    return format(new Date(date), "MM/dd");
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>5 day forecast:</h2>
      <div className={styles.daysWrapper}>
        {data.map((day) => (
          <WeekDayBox
            key={day.dt}
            date={formatDate(day.dt_txt)}
            mainConditionIcon={day.weather[0].icon}
            temperature={Math.floor(day.main.temp)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
