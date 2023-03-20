import { Button } from "../button/button.js";
import { InfoPanelElement } from "./infoPanel-element.js";
import styles from "./infoPanel.module.css";

export const InfoPanel = (props) => {
  const { data, onResetHandler, fields } = props;
  const elements = fields.map(({ russianName, name }) => {
    const props = { russianName, value: data[name] };
    return <InfoPanelElement key={name} {...props}></InfoPanelElement>;
  });
  return (
    <div className={styles.container}>
      <h2>
        {data.name} {data.surname}
      </h2>
      {elements}
      <Button name="reset" onResetHandler={onResetHandler} value="Очистить" />
    </div>
  );
};
