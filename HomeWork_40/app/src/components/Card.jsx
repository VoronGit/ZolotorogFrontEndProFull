import { useState } from "react";
import styles from "../styles/card.module.css";

function Card(props) {
  const [mainClass, changeMainClass] = useState(styles.card);

  function onClickIns(e) {
    props.onClick(e);
    changeMainClass(`${styles.active} ${styles.card}`);
    setTimeout(() => changeMainClass(`${styles.card}`), 500);
  }

  return (
    <div key={`modalCard${props.emoji.id}`} data-emoji-id={props.emoji.id} className={mainClass} onClick={onClickIns}>
      <p key={`emoji${props.emoji.id}`} className={`${styles.emoji} nonselect`}>{props.emoji.emoji}</p>
      <p key={`counter${props.emoji.id}`} className={`${styles.counter} nonselect`}>{props.emoji.count}</p>
    </div>
  );
}

export default Card;