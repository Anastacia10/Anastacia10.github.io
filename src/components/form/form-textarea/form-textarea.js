import { Component } from "react";
import styles from "./form-textarea.module.css";

export default class FormTextarea extends Component {
  render() {
    const {
      name,
      placeholder,
      rows,
      maxlength,
      value,
      onChangeHandler,
      russianName,
    } = this.props;
    const { label, textarea } = styles;
    return (
      <label htmlFor={name} className={label}>
        {russianName}
        <textarea
          className={textarea}
          name={name}
          id={name}
          rows={rows}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          maxLength={maxlength}
        ></textarea>
      </label>
    );
  }
}
