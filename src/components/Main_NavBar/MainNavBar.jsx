import React from "react";
import styles from "./style_Nav.module.css";
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <>
      <div className={styles.Nav_Main}>
        <div className={styles.TitleName}>Foodify Restaurant</div>
        <div className={styles.Buttons}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/signIn">
              <li>Login +</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainNavBar;
