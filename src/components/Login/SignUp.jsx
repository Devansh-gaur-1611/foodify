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

function SignUp() {
  return (
    <>
      <div className={styles.formBox}>
        <div className={styles.buttonBox}>
          <Link to="/foodify/signIn">
            <button type="button" className={styles.toggleBtn}>
              Log-In
            </button>
          </Link>
          <Link to="/foodify/signUp">
            <button
              type="button"
              className={styles.toggleBtn}
              id={styles.selected}
            >
              Sign-Up
            </button>
          </Link>
        </div>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faGoogle} id={styles.google} />
          <FontAwesomeIcon icon={faFacebook} id={styles.fb} />
          <FontAwesomeIcon icon={faGithub} />
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
            type="text"
            className={styles.inputField}
            placeholder="Enter E-Mail Id"
            required
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" name="" id={styles.checkBox} required />
          <span id={styles.span}>I accept the terms and conditions</span>

          <input type="submit" value="Register" id={styles.submitBtn} />
        </form>
      </div>
    </>
  );
}

export default SignUp;
