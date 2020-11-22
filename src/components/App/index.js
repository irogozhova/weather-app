import React from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";

import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch({ type: "weather/getData", value });
  };

  return (
    <div className={styles.root}>
      <Header onSearch={handleSearch} />
    </div>
  );
};

export default App;
