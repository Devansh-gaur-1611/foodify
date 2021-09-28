import React from "react";
import styles from "./style_contact.module.css";
import IconInfo from "./IconInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/fontawesome-free-solid";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact_Us() {
  return (
    <div className={styles.Main_Container}>
      <h1>Contact Us</h1>
      <p>Have any suggestion or query? Just leave a message</p>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h1>Contact Information</h1>
          <p>
            Fill the form and our team will reach out to you with in 24 hours
          </p>

          <IconInfo icon={faPhone} detail="+91-2345678901" />
          <IconInfo icon={faEnvelope} detail="admin@gmail.com" />
          <IconInfo
            icon={faMapMarkerAlt}
            detail="1405 Michael Street,Pleasant Mills,Indiana"
          />
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/_devansh_gaur/"
              target="_blank"
              id={styles.Is}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/devansh.gaur.583/"
              target="_blank"
              id={styles.Fb}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-gaur-90962a208"
              target="_blank"
              id={styles.Li}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Devansh-gaur-1611"
              target="_blank"
              id={styles.Gb}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.name}>
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input type="text" name="" id="" required />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input type="text" name="" id="" required />
            </div>
          </div>
          <div className={styles.yourContacts}>
            <div className={styles.formGroup}>
              <label>E-Mail</label>
              <input type="email" name="" id="" required />
            </div>
            <div className={styles.formGroup}>
              <label> Phone</label>
              <input type="tel" name="" id="" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="">Message</label>
            <input type="text" name="" id="" required />
          </div>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}

export default Contact_Us;
