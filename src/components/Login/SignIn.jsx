import React from "react";
import styles from "./style_login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className={styles.formBox}>
        <div className={styles.buttonBox}>
          <Link to="/foodify/signIn">
            <button
              type="button"
              className={styles.toggleBtn}
              id={styles.selected}
            >
              Log-In
            </button>
          </Link>
          <Link to="/foodify/signUp">
            <button type="button" className={styles.toggleBtn}>
              Sign-Up
            </button>
          </Link>
        </div>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faGoogle} id={styles.google} />
          <FontAwesomeIcon icon={faFacebook} id={styles.fb} />
          <FontAwesomeIcon icon={faGithub} id={styles.github} />
          <FontAwesomeIcon icon={faLinkedin} id={styles.linkedin} />
          <FontAwesomeIcon icon={faTwitter} id={styles.Twitter} />
        </div>
        <form className={styles.inputGroup}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="User-Id"
            required
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" name="" id={styles.checkBox} />
          <span id={styles.span}>Remember Password</span>
          <input type="submit" value="Log In" id={styles.submitBtn} />
        </form>
      </div>
    </>
  );
}

export default SignIn;
