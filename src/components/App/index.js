import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import SearchBox from "components/SearchBox";
import TodayWeatherBlock from "components/TodayWeatherBlock";

import {
  weatherSelector,
  isDataLoadingSelector,
} from "redux/weather/selectors";

import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(weatherSelector);
  const isLoading = useSelector(isDataLoadingSelector);

  const handleSearch = (value) => {
    dispatch({ type: "weather/getData", value });
  };

  const renderTopBlockContent = () => {
    if (isLoading) return <div className={styles.preloader}>loading</div>;

    if (weatherData.length === 0) {
      return <SearchBox onSearch={handleSearch} />;
    }

    return <TodayWeatherBlock data={weatherData} />;
  };

  return (
    <div className={styles.root}>
      <Header onSearch={handleSearch} />
      <div className={styles.topBlock}>{renderTopBlockContent()}</div>
    </div>
  );
};

export default App;
