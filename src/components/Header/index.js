import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.root}>
    <Logo />
    <SearchBox />
  </div>
);

export default Header;
