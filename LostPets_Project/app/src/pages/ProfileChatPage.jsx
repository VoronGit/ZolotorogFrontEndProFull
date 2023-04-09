import { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles/profileMessagesPage.module.css";
import mainStyles from "../mainStyles.module.css";

import image1 from "../pictures/message1.png";
import image2 from "../pictures/profilePicture.png";
import imageInMessage1 from "../pictures/imgInText1.png";
import imageInMessage2 from "../pictures/imgInText2.png";

const messages = [
    {
        id: 1,
        img: image1,
        name: "Іван",
        text: "Доброго дня! Підкажіть, будь ласка, бачив у вас повідомлення щодо собаки. А можете надіслати додаткове фото?",
        imgInMessage: [],
        date: "23:46, 27 лют."
    },
    {
        id: 2,
        img: image2,
        name: "Юлія",
        text: "Доброго ранку! Так, звісно.",
        imgInMessage: [imageInMessage1, imageInMessage2],
        date: "09:10, 28 лют."
    },
    {
        id: 3,
        img: image1,
        name: "Іван",
        text: "Так! Це наша собака! Скажіть, будь ласка, як можна з вами зустрітися, щоб забрати тварину?",
        imgInMessage: [],
        date: "09:16, 28 лют."
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
                    { name: "Повідомлення", link: "/profile/messages" },
                    { name: "Переглянути повідомлення", link: "" }
                ]
            }
        });
    }, []);

    return (
        <div className={styles.main}>
            {messages.map(el =>
                <div key={el.id} className={styles.messageBox}>
                    <img src={el.img} alt="" />
                    <div className={styles.messageBoxInside}>
                        <div className={styles.messageBoxLine}>
                            <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>{el.name}</h1>
                            <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5}`}>{el.date}</h1>
                        </div>
                        <div className={styles.messageBoxLineVert}>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{el.text}</h1>
                            <div className={styles.imgInTextRow}>
                                {el.imgInMessage.map(el => <img className={styles.imgInText} src={el} alt="" />)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileMessagesPage;