import React from "react";
import Logo from "./Logo";
import SearchBox from "components/SearchBox";

import styles from "./Header.module.css";

const Header = ({ isSearchVisible, onSearch }) => (
  <div className={styles.root}>
    <Logo />
    {isSearchVisible && <SearchBox onSearch={onSearch} />}
  </div>
);

export default Header;
