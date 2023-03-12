import "./app.module.css";
import { Component } from "react";
import Form from "../form/form.js";
import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Form></Form>
      </div>
    );
  }
}

export default App;
