import styles from "./input.module.css";

export const Input = (props) => {
  const {
    name,
    type,
    placeholder,
    value,
    onChangeHandler,
    russianName,
    isInvalidField,
    alarmText,
  } = props;

  return (
    <label htmlFor={name}>
      {russianName}
      <input
        className={isInvalidField ? styles.invalid : styles.valid}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChangeHandler}
        value={value}
        required
      />
      <p className={styles.messageField} hidden={isInvalidField ? false : true}>
        {value.length === 0 ? "Поле пустое.Заполните пожалуйста" : alarmText}
      </p>
    </label>
  );
};
