import { Component } from "react";
import styles from "./form.module.css";
import FormInput from "./form-input/form-input.js";
import FormTextarea from "./form-textarea/form-textarea.js";
import FormButton from "./form-btn/form-btn.js";

const UI_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "surname",
    type: "text",
    placeholder: "Enter your surname",
  },
  {
    name: "date_Of_Birth",
    type: "date",
    placeholder: "Enter Your date of birth",
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    name: "site",
    type: "url",
    placeholder: "Your site's link",
  },
  {
    name: "description",
    type: "textarea",
    placeholder: "Please, describe yourself (No more than 200 symbols)",
    rows: 7,
  },
  {
    name: "tech_Stack",
    type: "textarea",
    placeholder:
      "Please, describe your technical skills (No more than 200 symbols)",
    rows: 7,
  },
  {
    name: "last_Project_Description",
    type: "textarea",
    placeholder:
      "Please, tell us about your last project (No more than 200 symbols)",
    rows: 7,
  },
];

const DEFAULT_DATA = {
  name: "",
  surname: "",
  date_Of_Birth: "",
  phone: "",
  site: "",
  description: "",
  tech_Stack: "",
  last_Project_Description: "",
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
        {elememts}
        <div className={styles.btnBox}>
          <FormButton
            name="submit"
            onClickHandler={this.onClickHandler}
            value="Save"
          ></FormButton>
          <FormButton
            name="reset"
            onClickHandler={this.onClickHandler}
            value="Cancel"
          ></FormButton>
        </div>
      </form>
    );
  }
}
