import React from "react";
import styles from "./header.module.css";
const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onclick={onLogout}>
        Logout
      </button>
    )}
    <h1 className={styles.title}>Habit tracker</h1>
  </header>
);

export default Header;
