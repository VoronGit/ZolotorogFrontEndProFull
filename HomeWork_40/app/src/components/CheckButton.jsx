import { useState } from "react";
import styles from "../styles/checkButton.module.css";

function CheckButton(props) {
  const [mainClass, changeMainClass] = useState(styles.button);

  function onClickIns(e) {
    props.onClick(e);
    changeMainClass(`${styles.active} ${styles.button}`);
    setTimeout(() => changeMainClass(`${styles.button}`), 500);
  }

  return (
    <div key='checkButton' className={styles.wrapper}>
      <button className={mainClass} onClick={onClickIns}><span className="nonselect">Check results!</span></button>
    </div>
  );
}

export default CheckButton;