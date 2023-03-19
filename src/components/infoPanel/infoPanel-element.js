import { Component } from "react";
import styles from "./infoPanel.module.css";

export default class InfoPanelElement extends Component {
  render() {
    const { answer } = styles;
    const { russianName, value } = this.props;
    return (
      <div>
        <h3>{russianName}</h3>
        <p className={answer}>{value}</p>
      </div>
    );
  }
}
