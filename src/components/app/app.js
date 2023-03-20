import "./app.module.css";
import { useState } from "react";
import styles from "./app.module.css";
import {
  isValid,
  getNewInvalidList,
  isAllFieldsWasFilled,
} from "../../tools/validationForm.js";
import { getMaskedValue } from "../../tools/getMaskedValue";
import { Form } from "../form/form.js";
import { InfoPanel } from "../infoPanel/infoPanel.js";

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

export const App = () => {
  const [data, setData] = useState({ ...DEFAULT_STATE });

  //Here will be listed names of invalid Fields
  const [invalidList, setInvalidList] = useState([]);
  const [pageName, setPageName] = useState("form");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const isValidValue = isValid(name, value);

    /*If value isn't valid, the field's name will be added to InvalidList,
      If value is correct - will be deleted*/
    const newList = !isValidValue
      ? getNewInvalidList(invalidList, name, "add")
      : getNewInvalidList(invalidList, name, "del");
    const newValue =
      name === "phone" ? getMaskedValue(value, data[name]) : value;
    setData((data) => {
      return { ...data, [name]: newValue };
    });
    setInvalidList([...newList]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //If all fields are correct and filled
    if (invalidList.length === 0 && isAllFieldsWasFilled(data)) {
      setPageName("infoPanel");
    }
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    setData({ ...DEFAULT_STATE });
    setInvalidList([]);
    setPageName("form");
  };
  //It is switcher of pages
  let page = null;
  switch (pageName) {
    case "form":
      page = (
        <Form
          fields={UI_FIELDS}
          data={data}
          invalidList={invalidList}
          pageName={pageName}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          onResetHandler={onResetHandler}
        />
      );
      break;
    case "infoPanel":
      page = (
        <InfoPanel
          fields={UI_FIELDS}
          data={data}
          invalidList={invalidList}
          pageName={pageName}
          onResetHandler={onResetHandler}
        />
      );
      break;
    default:
      break;
  }
  return <div className={styles.app}>{page}</div>;
};
