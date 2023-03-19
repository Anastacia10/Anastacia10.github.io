import { Component } from "react";
import styles from "./form-input.module.css";

export default class FormInput extends Component {
  render() {
    const { name, type, placeholder, value, onChangeHandler, russianName } =
      this.props;
    const { label, input } = styles;
    return (
      <label htmlFor={name} className={label}>
        {russianName}
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
