import { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles/profileDefaultPage.module.css";
import mainStyles from "../mainStyles.module.css";

import instagramIcon from "../icons/Instagram.svg";
import telegramIcon from "../icons/Telegram.svg";
import facebookIcon from "../icons/Facebook.svg";

import Tag from "../components/Tag";

import image from "../pictures/profilePicture.png";

const profile = {
    img: image,
    tags: ["Верифікований", "Тут з 2020 року"],
    name: "Юлія М.",
    address: "м. Київ",
    email: "julia34@gmail.com",
    phone: "+380663214567",
    services: [{ name: "Сітер", state: true }, { name: "Перетримка", state: false }],
    description: "Візьму вашу тваринку на перетримку (невелику собачку або кота).",
    price: "50 грн / день."
}

function ProfileDefaultPage({ }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "CHANGE_PATH", payload: {
                path: [
                    { name: "Головна", link: "/" },
                    { name: "Мій обліковий запис", link: "" }
                ]
            }
        });
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.firstRow}>
                <img src={profile.img} />
                <div className={styles.mainDescriptionBox}>
                    <div className={styles.tagLine}>
                        {profile.tags.map(el => {
                            return <Tag key={el} text={el}></Tag>
                        })}
                    </div>
                    <div className={styles.mainDescription}>
                        <div className={styles.fieldWithData}>
                            <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>{profile.name}</h1>
                        </div>
                        <div className={styles.fieldWithData}>
                            <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Адреса:</h1>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{profile.address}</h1>
                        </div>
                        <div className={styles.fieldWithData}>
                            <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Email:</h1>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{profile.email}</h1>
                        </div>
                        <div className={styles.fieldWithData}>
                            <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Телефон:</h1>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{profile.phone}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.servicesBox}>
                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Я надаю послуги</h1>
                <div className={styles.servicesRow}>
                    {profile.services.map(el => {
                        return <div key={el.name} className={el.state ? styles.serviceTagActive : styles.serviceTagNotActive}>
                            <h1 className={`${mainStyles.HeadLine4} ${mainStyles.textMainColor}`}>{el.name}</h1>
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.decriptionsRow}>
                <div className={styles.fieldWithData}>
                    <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Опис:</h1>
                    <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{profile.description}</h1>
                </div>
                <div className={styles.fieldWithData}>
                    <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Вартість послуги (за день):</h1>
                    <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{profile.price}</h1>
                </div>
            </div>
            <div className={styles.socialsContainer}>
                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Поділитися посиланням на профіль в соціальних мережах</h1>
                <div className={styles.socialsRowCard}>
                    <a href="" target="_blank"><img src={instagramIcon} alt="instagram" /></a>
                    <a href="" target="_blank"><img src={telegramIcon} alt="telegram" /></a>
                    <a href="" target="_blank"><img src={facebookIcon} alt="facebook" /></a>
                </div>
            </div>
        </div>
    );
}

export default ProfileDefaultPage;