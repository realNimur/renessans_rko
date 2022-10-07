import React from "react";
import styles from "../../../pages/Step2/styles.module.scss";
import classNames from "classnames";

const Input = ({ name, rightElement = null, value = "", placeholder }) => {
  return (
    <div className={styles.input__wrapper}>
      {rightElement ? (
        <span className={styles.icon}>{rightElement}</span>
      ) : null}
      <p className={styles.name}>{name}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={classNames(styles.input)}
      />
    </div>
  );
};

export default Input;
