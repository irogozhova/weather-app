import React from "react";
import { ReactComponent as LogoIcon } from "../../../svg/sun.svg";

import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.root}>
    <LogoIcon className={styles.icon} />
    <div className={styles.text}>
      <div className={styles.title}>no bad days</div>
      <div className={styles.subtitle}>weather services</div>
    </div>
  </div>
);

export default Logo;
