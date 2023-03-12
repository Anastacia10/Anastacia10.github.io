import { Component } from "react";
import styles from "./form-input.module.css";

export default class FormInput extends Component {
  render() {
    const { name, type, placeholder, value, onChangeHandler } = this.props;
    const { label, input } = styles;
    const newLabel = name
      .split("_")
      .map((el) => el.toUpperCase())
      .join(" ");
    return (
      <label htmlFor={name} className={label}>
        {newLabel}
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={onChangeHandler}
          value={value}
          className={input}
        />
      </label>
    );
  }
}
