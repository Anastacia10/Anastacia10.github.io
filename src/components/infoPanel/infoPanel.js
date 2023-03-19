import { Component } from "react";
import Button from "../button/button.js";
import InfoPanelElement from "./infoPanel-element.js";
import styles from "./infoPanel.module.css";

export default class InfoPanel extends Component {
  render() {
    const { container } = styles;
    const { data, onClickHandler, fields } = this.props;
    const elements = fields.map(({ russianName, name }) => {
      const props = { russianName, value: data[name] };
      return <InfoPanelElement key={name} {...props}></InfoPanelElement>;
    });
    return (
      <div className={container}>
        <h2>
          {data.name} {data.surname}
        </h2>
        {elements}
        <Button name="reset" onClickHandler={onClickHandler} value="Очистить" />
      </div>
    );
  }
}
