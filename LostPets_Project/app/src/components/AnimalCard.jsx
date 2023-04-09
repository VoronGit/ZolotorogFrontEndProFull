import { useState } from 'react';

import styles from "./styles/animalCard.module.css";
import mainStyles from "../mainStyles.module.css";

import instagramIcon from "../icons/Instagram.svg";
import telegramIcon from "../icons/Telegram.svg";
import facebookIcon from "../icons/Facebook.svg";

function AnimalCard({ animalData, type }) {
    const [ buttonStateClass, changeButtonStateClass ] = useState(`${mainStyles.HeadLine4} ${mainStyles.footerText}`);

    const onClick = () => {
        changeButtonStateClass(`${styles.buttonClicked} ${mainStyles.HeadLine4}`)
    } 


    return (
        <div className={`${styles.main} ${type === "small" ? styles.mainSmall : styles.mainBig}`}>
            <img className={type === "small" ? styles.smallImg : styles.bigImg} src={animalData.img} alt="arrow" />
            <div className={styles.textBlock}>
                <div className={styles.cardDoubleRow}>
                    <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5} ${styles.overflow}`}>{animalData.cardName}</h1>
                    <div className={styles.fieldWithData}>
                        <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5}`}>Стать:</h1>
                        <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>{animalData.animalSex}</h1>
                    </div>
                </div>
                <div className={styles.fieldWithData}>
                    <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5}`}>Коли:</h1>
                    <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>{animalData.lostFoundDate}</h1>
                </div>
                <div className={styles.fieldWithData}>
                    <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5}`}>Де:</h1>
                    <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor} ${styles.overflow}`}>{animalData.address}</h1>
                </div>
                <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor} ${styles.overflow2}`}>{animalData.details}</h1>
            </div>
            <div className={styles.cardDoubleRow}>
                <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5} ${styles.overflow}`}>Поділитися:</h1>
                <div className={styles.socialsRowCard}>
                    <a href="" target="_blank"><img src={instagramIcon} alt="instagram" /></a>
                    <a href="" target="_blank"><img src={telegramIcon} alt="telegram" /></a>
                    <a href="" target="_blank"><img src={facebookIcon} alt="facebook" /></a>
                </div>
            </div>
            <div className={styles.makeCallButton}>
                <button className={buttonStateClass} onClick={onClick}>Зв‘язатися</button>
            </div>
        </div>
    );
}

export default AnimalCard;