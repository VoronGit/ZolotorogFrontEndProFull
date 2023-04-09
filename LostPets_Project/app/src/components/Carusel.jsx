import { useState } from 'react';

import styles from "./styles/carusel.module.css";
import arrowIcon from "../icons/Arrow.svg";

import AnimalCard from "./AnimalCard";
import ReviewCard from "./ReviewCard";

function Carusel({ itemsList, itemsType }) {
    const [currItem, changeCurrImg] = useState(0);

    const subsOnClick = () => {
        changeCurrImg(currItem - 1);
    }

    const addOnClick = () => {
        changeCurrImg(currItem + 1);
    }

    const makeCircle = (num) => {
        const full = num % itemsList.length
        if (full < 0) {
            return itemsList.length - -num % itemsList.length;
        } else {
            return full;
        }
    }

    return (
        <div className={styles.main}>
            <img src={arrowIcon} alt="arrow" onClick={subsOnClick} />
            {itemsType === "BigCards" ?
                <div>
                    <AnimalCard type="big" animalData={itemsList[makeCircle(currItem)]}></AnimalCard>
                    <AnimalCard type="big" animalData={itemsList[makeCircle(currItem + 1)]}></AnimalCard>
                    <AnimalCard type="big" animalData={itemsList[makeCircle(currItem + 2)]}></AnimalCard>
                </div>
                :
                <div>
                    <ReviewCard reviewData={itemsList[makeCircle(currItem)]}></ReviewCard>
                    <ReviewCard reviewData={itemsList[makeCircle(currItem + 1)]}></ReviewCard>
                    <ReviewCard reviewData={itemsList[makeCircle(currItem + 2)]}></ReviewCard>
                </div>
            }
            <img src={arrowIcon} alt="arrow" onClick={addOnClick} />
        </div>
    );
}

export default Carusel;