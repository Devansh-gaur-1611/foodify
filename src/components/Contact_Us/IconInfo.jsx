import React from "react";
import styles from "./style_contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconInfo(props) {
  return (
    <>
      <div className={styles.IconInfoContainer}>
        <FontAwesomeIcon icon={props.icon} />
        <p className={styles.myContact_Para}>{props.detail}</p>
      </div>
    </>
  );
}
export default IconInfo;
