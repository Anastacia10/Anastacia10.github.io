import { Component } from "react";
import styles from "./form-textarea.module.css";

export default class FormTextarea extends Component {
  render() {
    const { name, placeholder, rows, value, onChangeHandler } = this.props;
    const { label, textarea } = styles;
    const newLabel = name
      .split("_")
      .map((el) => el.toUpperCase())
      .join(" ");
    return (
      <label htmlFor={name} className={label}>
        {newLabel}
        <textarea
          className={textarea}
          name={name}
          id={name}
          rows={rows}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          maxLength="200"
        ></textarea>
      </label>
    );
  }
}
