import { useState } from "react";
import styles from "./textarea.module.css";

export const Textarea = (props) => {
  const {
    name,
    placeholder,
    value,
    onChangeHandler,
    russianName,
    isInvalidField,
    alarmText,
  } = props;

  const [maxLength] = useState(600);
  const [rows] = useState(7);
  return (
    <label htmlFor={name}>
      {russianName}
      <textarea
        className={isInvalidField ? styles.invalid : ""}
        name={name}
        id={name}
        rows={rows}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        required
      />
      {isInvalidField ? (
        <AlarmMessage alarmText={alarmText} value={value} />
      ) : (
        <InfoMessage maxLength={maxLength} value={value} />
      )}
    </label>
  );
};

const AlarmMessage = (props) => {
  const { alarmText, value } = props;
  const isEmptyField = value.length === 0;
  const [isValidWord] = useState(
    value.split(" ").every((word) => word.length < 37)
  );

  if (isEmptyField) {
    return (
      <span className={styles.alarm}>Поле пустое.Заполните пожалуйста</span>
    );
  } else if (!isValidWord) {
    return (
      <span className={styles.alarm}>
        Лексема не может иметь больше 37 букв. Если вы не химик, то используйте
        пробелы
      </span>
    );
  } else {
    return <span className={styles.alarm}>{alarmText}</span>;
  }
};

const InfoMessage = (props) => {
  const { maxLength, value } = props;
  return (
    <span>
      Осталось {maxLength - value.length}/{maxLength} символов
    </span>
  );
};
