import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./styles/profileMessagesPage.module.css";
import mainStyles from "../mainStyles.module.css";

import image1 from "../pictures/message1.png";
import image2 from "../pictures/message2.png";
import image3 from "../pictures/message3.png";
import image4 from "../pictures/message4.png";

const messages = [
    {
        id: 1,
        img: image1,
        name: "Іван",
        text: "Доброго дня! Підкажіть, будь ласка, бачив у вас повідомлення щодо собаки..",
        date: "23:46, 27 лют.",
        unreadMessages: 2
    },
    {
        id: 2,
        img: image2,
        name: "Анна",
        text: "Добрий день! Хочу скористатися вашими послугами сітера. Маю собаку..",
        date: "08:46, 27 лют.",
        unreadMessages: 1
    }, {
        id: 3,
        img: image3,
        name: "Славик",
        text: "Доброго дня! Надішліть будь ласка фото собаки, ми загубили свою.. ",
        date: "12:00, 26 лют.",
        unreadMessages: 1
    },
    {
        id: 4,
        img: image4,
        name: "Антон",
        text: "Подскажите, как к вами связаться можно по поводу передержки собаки?. Подскажите, как к вами связаться можно по поводу передержки собаки?.",
        date: "13:45, 25 лют.",
        unreadMessages: 1
    }
];

function ProfileMessagesPage({ }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "CHANGE_PATH", payload: {
                path: [
                    { name: "Головна", link: "/" },
                    { name: "Мій обліковий запис", link: "/profile" },
                    { name: "Повідомлення", link: "" }
                ]
            }
        });
    }, []);

    return (
        <div className={styles.main}>
            {messages.map(el =>
                <Link to="/profile/messages/chat" style={{ textDecoration: "none" }}>
                    <div key={el.id} className={styles.messageBox}>
                        <img src={el.img} alt="" />
                        <div className={styles.messageBoxInside}>
                            <div className={styles.messageBoxLine}>
                                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>{el.name}</h1>
                                <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5}`}>{el.date}</h1>
                            </div>
                            <div className={styles.messageBoxLine}>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{el.text}</h1>
                                <div className={styles.unreadMessages}>
                                    <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>{el.unreadMessages}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ProfileMessagesPage;