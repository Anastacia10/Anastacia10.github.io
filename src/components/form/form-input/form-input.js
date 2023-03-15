import { Component } from "react";
import styles from "./form-input.module.css";

export default class FormInput extends Component {
  render() {
    const {
      name,
      type,
      placeholder,
      value,
      onChangeHandler,
      russianName,
      isInvalidField,
      alarmText,
    } = this.props;
    const { messageField, invalid, valid } = styles;
    const alarmMessage =
      value.length === 0 ? "Поле пустое.Заполните пожалуйста" : alarmText;
    return (
      <label htmlFor={name}>
        {russianName}
        <input
          className={isInvalidField ? invalid : valid}
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={onChangeHandler}
          value={value}
          required
        />
        <p className={messageField} hidden={isInvalidField ? false : true}>
          {alarmMessage}
        </p>
      </label>
    );
  }
}
