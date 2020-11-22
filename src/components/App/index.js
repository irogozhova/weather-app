import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import SearchBox from "components/SearchBox";
import TodayWeatherBlock from "components/TodayWeatherBlock";
import WeekForecast from "components/WeekForecast";

import {
  weatherSelector,
  isDataLoadingSelector,
  errorSelector,
} from "redux/weather/selectors";

import { getErrorText } from "utils/errors";

import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(weatherSelector);
  const isLoading = useSelector(isDataLoadingSelector);
  const error = useSelector(errorSelector);

  const handleSearch = (value) => {
    dispatch({ type: "weather/getData", value });
  };

  const renderTopBlockContent = () => {
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div className={styles.error}>{getErrorText(error)}</div>;

    if (!weatherData) {
      return <SearchBox onSearch={handleSearch} />;
    }

    return <TodayWeatherBlock data={weatherData} />;
  };

  return (
    <div className={styles.root}>
      <Header isSearchVisible={weatherData || error} onSearch={handleSearch} />
      <div className={styles.content}>
        <div className={styles.topBlock}>{renderTopBlockContent()}</div>
        {weatherData && !error && (
          <WeekForecast
            data={weatherData.list.filter((item) =>
              item.dt_txt.includes("00:00:00")
            )}
          />
        )}
      </div>
    </div>
  );
};

export default App;
