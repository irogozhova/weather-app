import React, { useState } from "react";

import styles from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const handleSearch = () => {
    onSearch(searchEntry);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.root}>
      <input
        type="search"
        autoFocus
        className={styles.input}
        placeholder="Search for a city"
        value={searchEntry}
        onChange={(e) => setSearchEntry(e.target.value)}
        onKeyPress={handleKeypress}
      />
      <span className={styles.searchBtn} onClick={handleSearch} />
    </div>
  );
};

export default SearchBox;
