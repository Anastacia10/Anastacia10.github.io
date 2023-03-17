import "./app.module.css";
import { Component } from "react";
import styles from "./app.module.css";
import {
  isValid,
  getNewInvalidList,
  isAllFieldsWasFilled,
} from "../../tools/validationForm.js";
import { getMaskedValue } from "../../tools/getMaskedValue";
import Form from "../form/form.js";
import InfoPanel from "../infoPanel/infoPanel.js";

const UI_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "Например: Вася",
    russianName: "Имя",
    alarmText: "Имя и фамилия пишутся с большой буквы",
  },
  {
    name: "surname",
    type: "text",
    placeholder: "Например: Пупкин",
    russianName: "Фамилия",
    alarmText: "Имя и фамилия пишутся с большой буквы",
  },
  {
    name: "dateOfBirth",
    type: "date",
    placeholder: "Введи свою дату рождения",
    russianName: "Дата рождения",
    alarmText: "Не введена дата рождения",
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Формат: 7-7777-77-77",
    russianName: "Номер телефона",
    pattern: "[0-9]-[0-9]{4}-[0-9]{2}-[0-9]{2}",
    alarmText: "Не соотвествует формату: 7-7777-77-77",
  },
  {
    name: "site",
    type: "url",
    placeholder: "Например: https://pupkin.com",
    russianName: "Ссылка на сайт",
    alarmText: "Адрес сайта начинается с https:// ",
  },
  {
    name: "description",
    type: "textarea",
    placeholder: "Расскажи о себе.",
    russianName: "О себе",
    alarmText: "Превышен лимит символов",
  },
  {
    name: "techStack",
    type: "textarea",
    placeholder: "Названия технологий, которыми владеешь.",
    russianName: "Стек технологий",
    alarmText: "Превышен лимит символов",
  },
  {
    name: "lastProjectDescription",
    type: "textarea",
    placeholder: `Опиши свой последний проект.`,
    russianName: "Описание последнего проекта",
    alarmText: "Превышен лимит символов",
  },
];

const DEFAULT_STATE = {
  name: "",
  surname: "",
  dateOfBirth: "",
  phone: "",
  site: "",
  description: "",
  techStack: "",
  lastProjectDescription: "",
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { ...DEFAULT_STATE },
      invalidList: [],
      focus: "",
      pageName: "form",
    };
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isValidValue = isValid(name, value);

    this.setState(({ data, invalidList }) => {
      const newList = !isValidValue
        ? getNewInvalidList(invalidList, name, "add")
        : getNewInvalidList(invalidList, name, "del");
      if (name === "phone") {
        let newValue = getMaskedValue(value, data[name]);
        return {
          data: { ...data, [name]: newValue },
          invalidList: [...newList],
        };
      }
      return {
        data: { ...data, [name]: value },
        invalidList: [...newList],
      };
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const { invalidList, data } = this.state;
    if (name === "submit") {
      if (invalidList.length === 0 && isAllFieldsWasFilled(data)) {
        this.setState({
          pageName: "infoPanel",
        });
      } else {
        this.setState(({ data }) => ({
          focus: data[0],
        }));
      }
    } else if (name === "reset") {
      this.setState({
        data: { ...DEFAULT_STATE },
        invalidList: [],
        focus: "",
        pageName: "form",
      });
    }
  };

  render() {
    const { pageName } = this.state;
    let page = null;
    switch (pageName) {
      case "form":
        page = (
          <Form
            fields={UI_FIELDS}
            {...this.state}
            onChangeHandler={this.onChangeHandler}
            onClickHandler={this.onClickHandler}
          ></Form>
        );
        break;
      case "infoPanel":
        page = (
          <InfoPanel
            fields={UI_FIELDS}
            {...this.state}
            onClickHandler={this.onClickHandler}
          ></InfoPanel>
        );
        break;
      default:
        break;
    }

    return <div className={styles.app}>{page}</div>;
  }
}

export default App;
