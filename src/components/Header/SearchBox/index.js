import React, { useState } from "react";

import styles from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const handleSearch = () => {
    onSearch(searchEntry);
  };

  return (
    <div className={styles.root}>
      <input
        type="search"
        className={styles.input}
        placeholder="Type the name of the city"
        value={searchEntry}
        onChange={(e) => setSearchEntry(e.target.value)}
      />
      <span className={styles.searchBtn} onClick={handleSearch} />
    </div>
  );
};

export default SearchBox;
