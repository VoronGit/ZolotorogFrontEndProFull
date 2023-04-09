import { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles/profileAdvertsPage.module.css";
import mainStyles from "../mainStyles.module.css";

import image1 from "../pictures/a1.png";
import image2 from "../pictures/a2.png";
import image3 from "../pictures/a3.png";

const adv = [
    {
        id: 1,
        img: image1,
        name: "Знайдено собаку",
        text: "Дніпро, вул. Калинова. Знайшли собачку без нашийнику, видно, що домашній.",
        date: "13:10, 01.03"
    },
    {
        id: 2,
        img: image2,
        name: "Марта",
        text: "Зникла собака, дівчинка. Невеликого розміру, була з чорним нашийником. До людей не агресивна, не кусається. Відгукується на.. Зникла собака, дівчинка. Невеликого розміру, була з чорним нашийником. До людей не агресивна, не кусається. Відгукується на..Зникла собака, дівчинка. Невеликого розміру, була з чорним нашийником. До людей не агресивна, не кусається. Відгукується на..",
        date: "10:10, 20 лют."
    },
    {
        id: 3,
        img: image3,
        name: "Джек",
        text: "Терміново!!! На дитячому майданчику був загублений...  Дніпро, пров. Сонячний.",
        date: "10:10, 20 лют."
    }
];

function ProfileAdvertsPage({ }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "CHANGE_PATH", payload: {
                path: [
                    { name: "Головна", link: "/" },
                    { name: "Мій обліковий запис", link: "/profile" },
                    { name: "Оголошення", link: "" }
                ]
            }
        });
    }, []);

    return (
        <div className={styles.main}>
            {adv.map(el =>
                <div key={el.id} className={styles.advBox}>
                    <img src={el.img} alt="" />
                    <div className={styles.advBoxBorders}>
                        <div className={styles.advBoxInside}>
                            <div className={styles.advBoxLine}>
                                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>{el.name}</h1>
                                <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5}`}>{el.date}</h1>
                            </div>
                            <div className={styles.advBoxLine}>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{el.text}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileAdvertsPage;