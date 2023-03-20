import styles from "./form.module.css";
import { Input } from "./input/input.js";
import { Textarea } from "./textarea/textarea.js";
import { Button } from "../button/button.js";

export const Form = (props) => {
  const {
    data,
    invalidList,
    onChangeHandler,
    onSubmitHandler,
    fields,
    onResetHandler,
  } = props;
  const elememts = fields.map((fieldProps) => {
    let isInvalidField = invalidList.includes(fieldProps.name);
    const props = { ...fieldProps, value: data[fieldProps.name] };
    if (fieldProps.type === "textarea") {
      return (
        <Textarea
          {...props}
          key={fieldProps.name}
          isInvalidField={isInvalidField}
          onChangeHandler={onChangeHandler}
        />
      );
    } else {
      return (
        <Input
          {...props}
          key={fieldProps.name}
          isInvalidField={isInvalidField}
          onChangeHandler={onChangeHandler}
        />
      );
    }
  });
  return (
    <form className={styles.form}>
      <h2>Создание анкеты</h2>
      {elememts}
      <div className={styles.btnBox}>
        <Button
          name="submit"
          onSubmitHandler={onSubmitHandler}
          value="Сохранить"
        />
        <Button name="reset" onResetHandler={onResetHandler} value="Отмена" />
      </div>
    </form>
  );
};
