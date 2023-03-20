import styles from "./infoPanel.module.css";

export const InfoPanelElement = (props) => {
  const { russianName, value } = props;
  return (
    <div>
      <h3>{russianName}</h3>
      <p className={styles.answer}>{value}</p>
    </div>
  );
};
