import { useState } from 'react';

import styles from "./styles/bigButton.module.css";
import mainStyles from "../mainStyles.module.css";

function BigButton({isDisabled, buttonText, buttonStyle}) {

    const textByType = buttonStyle === "Big" ? mainStyles.Body2 : mainStyles.HeadLine4;
    const sizeByType = buttonStyle === "Big" ? styles.buttonBig : buttonStyle === "Small" ? styles.buttonSmall : styles.buttonSmallLong;
    const main = buttonStyle === "Big" ? styles.main : buttonStyle === "Small" ? styles.main : `${styles.main} ${styles.mainFullWidth}`;

    const [ buttonStateClass, changeButtonStateClass ] = useState(`${styles.button} ${sizeByType} ${textByType}`);

    const onMouseDown = () => {
        changeButtonStateClass(`${styles.button} ${sizeByType} ${styles.buttonHold} ${textByType}`)
    } 

    const onMouseUp = () => {
        changeButtonStateClass(`${styles.button} ${sizeByType} ${styles.buttonClicked} ${textByType}`)
    } 

    return (
        <div  className={main}>
            <button className={isDisabled ? `${buttonStateClass} ${styles.disabled}` : buttonStateClass} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>{buttonText}</button>
        </div>
    );
}

export default BigButton;