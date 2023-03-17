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
    const array = value.split(" ");
    const isValidLength = array.every((word) => word.length < 37);
    let alarmMessage = null;
    if (value.length === 0) {
      alarmMessage = (
        <span className={alarm}>Поле пустое.Заполните пожалуйста</span>
      );
    } else if (!isValidLength) {
      alarmMessage = (
        <span className={alarm}>
          Лексема не может иметь больше 37 букв. Если вы не химик, то
          используйте пробелы
        </span>
      );
    } else {
      alarmMessage = <span className={alarm}>{alarmText}</span>;
    }
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
