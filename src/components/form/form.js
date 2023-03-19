import { Component } from "react";
import styles from "./form.module.css";
import FormInput from "./form-input/form-input.js";
import FormTextarea from "./form-textarea/form-textarea.js";
import Button from "../button/button.js";
export default class Form extends Component {
  render() {
    const { data, invalidList, onChangeHandler, onClickHandler, fields } =
      this.props;
    const elememts = fields.map((fieldProps) => {
      let isInvalidField = invalidList.includes(fieldProps.name);
      const props = { ...fieldProps, value: data[fieldProps.name] };
      if (fieldProps.type === "textarea") {
        return (
          <FormTextarea
            {...props}
            key={fieldProps.name}
            isInvalidField={isInvalidField}
            onChangeHandler={onChangeHandler}
          />
        );
      } else {
        return (
          <FormInput
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
            onClickHandler={onClickHandler}
            value="Сохранить"
          />
          <Button name="reset" onClickHandler={onClickHandler} value="Отмена" />
        </div>
      </form>
    );
  }
}
