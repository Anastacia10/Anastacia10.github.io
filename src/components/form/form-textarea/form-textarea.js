import { Component } from "react";
import styles from "./form-textarea.module.css";

export default class FormTextarea extends Component {
  constructor() {
    super();
    this.state = {
      maxLength: 600,
      rows: 7,
    };
  }
  render() {
    const {
      name,
      placeholder,
      value,
      onChangeHandler,
      russianName,
      isInvalidField,
      alarmText,
    } = this.props;
    const { rows, maxLength } = this.state;
    const { alarm, invalid } = styles;
    const alarmMessage =
      value.length === 0 ? (
        <span className={alarm}>Поле пустое.Заполните пожалуйста</span>
      ) : (
        <span className={alarm}>{alarmText}</span>
      );
    const infoMessage = (
      <span>
        Осталось {maxLength - value.length}/{maxLength} символов
      </span>
    );
    return (
      <label htmlFor={name}>
        {russianName}
        <textarea
          className={isInvalidField ? invalid : ""}
          name={name}
          id={name}
          rows={rows}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          required
        />
        {isInvalidField ? alarmMessage : infoMessage}
      </label>
    );
  }
}
