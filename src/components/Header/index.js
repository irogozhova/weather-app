import React from "react";
import Logo from "./Logo";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.root}>
    <Logo />
  </div>
);

export default Header;
