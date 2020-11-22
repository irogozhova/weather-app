import React from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";

const App = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch({ type: "weather/getData", value });
  };

  return <Header onSearch={handleSearch} />;
};

export default App;
