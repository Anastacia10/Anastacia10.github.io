import { Component } from "react";
import styles from "./form-btn.module.css";

export default class FormButton extends Component {
  render() {
    const { name, value, onClickHandler } = this.props;
    return (
      <button onClick={onClickHandler} name={name} className={styles.btn}>
        {value}
      </button>
    );
  }
}
