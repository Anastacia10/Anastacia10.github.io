import { Component } from "react";
import styles from "./button.module.css";

export default class Button extends Component {
  render() {
    const { name, value, onClickHandler } = this.props;
    return (
      <button onClick={onClickHandler} name={name} className={styles.btn}>
        {value}
      </button>
    );
  }
}
