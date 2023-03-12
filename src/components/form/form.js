import { Component } from "react";
import styles from "./form.module.css";
import FormInput from "./form-input/form-input.js";
import FormTextarea from "./form-textarea/form-textarea.js";
import FormButton from "./form-btn/form-btn.js";

const UI_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "Введи свое имя",
    russianName: "Имя",
  },
  {
    name: "surname",
    type: "text",
    placeholder: "Введи свою фамилию",
    russianName: "Фамилия",
  },
  {
    name: "dateOfBirth",
    type: "date",
    placeholder: "Введи свою дату рождения",
    russianName: "Дата рождения",
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Введи номер телефона",
    russianName: "Номер телефона",
  },
  {
    name: "site",
    type: "url",
    placeholder: "Введи адрес сайта",
    russianName: "Ссылка на сайт",
  },
  {
    name: "description",
    type: "textarea",
    placeholder: "Расскажи о себе.",
    rows: 7,
    russianName: "О себе",
    maxlength: 200,
  },
  {
    name: "techStack",
    type: "textarea",
    placeholder: "Названия технологий, которыми владеешь.",
    rows: 7,
    maxlength: 200,
    russianName: "Стек технологий",
  },
  {
    name: "lastProjectDescription",
    type: "textarea",
    placeholder: `Опиши свой последний проект.`,
    rows: 7,
    maxlength: 200,
    russianName: "Описание последнего проекта",
  },
];

const DEFAULT_DATA = {
  name: "",
  surname: "",
  dateOfBirth: "",
  phone: "",
  site: "",
  description: "",
  techStack: "",
  lastProjectDescription: "",
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: UI_FIELDS,
      data: { ...DEFAULT_DATA },
    };
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(({ data }) => ({
      data: { ...data, [name]: value },
    }));
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "submit") {
      console.log(this.state.data);
    } else if (name === "reset") {
      this.setState({
        data: { ...DEFAULT_DATA },
      });
    }
  };
  render() {
    const { fields, data } = this.state;
    const elememts = fields.map((fieldProps) => {
      const props = { ...fieldProps, value: data[fieldProps.name] };
      if (fieldProps.type === "textarea") {
        return (
          <FormTextarea
            {...props}
            key={fieldProps.name}
            onChangeHandler={this.onChangeHandler}
          ></FormTextarea>
        );
      } else {
        return (
          <FormInput
            {...props}
            key={fieldProps.name}
            onChangeHandler={this.onChangeHandler}
          ></FormInput>
        );
      }
    });
    return (
      <form className={styles.form}>
        <h2>Создание анкеты</h2>
        {elememts}
        <div className={styles.btnBox}>
          <FormButton
            name="submit"
            onClickHandler={this.onClickHandler}
            value="Сохранить"
          ></FormButton>
          <FormButton
            name="reset"
            onClickHandler={this.onClickHandler}
            value="Отмена"
          ></FormButton>
        </div>
      </form>
    );
  }
}
