import styles from "./button.module.css";

export const Button = (props) => {
  const { name, value, onSubmitHandler, onResetHandler } = props;
  return (
    <button
      onClick={name === "submit" ? onSubmitHandler : onResetHandler}
      name={name}
      className={styles.btn}
    >
      {value}
    </button>
  );
};
