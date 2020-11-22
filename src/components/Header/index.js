import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

import styles from "./Header.module.css";

const Header = ({ onSearch }) => (
  <div className={styles.root}>
    <Logo />
    <SearchBox onSearch={onSearch} />
  </div>
);

export default Header;
