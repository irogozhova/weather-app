import React from "react";

import styles from "./SearchBox.module.css";

const SearchBox = () => (
  <div className={styles.root}>
    <input
      type="search"
      className={styles.input}
      placeholder="Type the name of the city"
    />
    <span className={styles.searchBtn} />
  </div>
);

export default SearchBox;
