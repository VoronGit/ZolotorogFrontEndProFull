import { useState } from 'react';

import styles from "./styles/reviewCard.module.css";
import mainStyles from "../mainStyles.module.css";

function ReviewCard({ reviewData }) {
    return (
        <div className={styles.main}>
            <img src={reviewData.img} alt="arrow" />
            <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>{reviewData.name}</h1>
            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{reviewData.details}</h1>
        </div>
    );
}

export default ReviewCard;