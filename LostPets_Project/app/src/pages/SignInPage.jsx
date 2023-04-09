import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./styles/signInPage.module.css";
import mainStyles from "../mainStyles.module.css";

import NavigationBar from "../components/NavigationBar";

import profileIcon from "../icons/Profile.svg";
import homeIcon from "../icons/Home.svg";
import plusIcon from "../icons/Plus.svg";

function SignInPage({ }) {
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
            <div>
                <div className="mainPageContainer">
                    <NavigationBar></NavigationBar>
                </div>
            </div>
            <div className={styles.warning}>
                <div className="mainPageContainer">
                    <div className={styles.warningDisplay}>
                        <div className={styles.warningDisplayIns}>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>На жаль, доступ до цієї сторінки мають лише авторизовані користувачі. Будь ласка, натисніть</h1>
                            <Link to={'/registration'} style={{ textDecoration: 'none' }}><h1 className={`${mainStyles.HeadLine4} ${mainStyles.textMainColor}`}>Увійти</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mainPageContainer">
                    <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Зареєструйтеся або авторизуйтеся та отримайте можливість додавати, змінювати та видаляти оголошення. За бажанням, Ви зможете приймати участь у пошуку зниклих тварин або просто ділитися новинами та свіжими оголошеннями з нашої розсилки у своїх соцмережах.</h1>
                </div>
            </div>
            <div>
                <div className="mainPageContainer">
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardFirstRow}>
                                <img src={profileIcon} alt="picture" />
                                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Ваш профіль</h1>
                            </div>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Зайшовши у свій акаунт, Ви зможете зробити багато корисних речей. Вкажіть якомога більше інформації, щоб ми змогли Вам допомогти.</h1>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardFirstRow}>
                                <img src={homeIcon} alt="picture" />
                                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Збережена адреса</h1>
                            </div>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>На цій сторінці можна вказати свою адресу (без конкретики), щоб в майбутньому отримувати інформаційні e-mail та допомагати знаходити зниклих тварин з вашого міста або района.</h1>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardFirstRow}>
                                <img src={plusIcon} alt="picture" />
                                <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Додати оголошення</h1>
                            </div>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Додайте оголошення щодо зниклої або знайденої тварини. Основні дані перевіряються нашим співробітником, тому активним воно стане лише після погодження.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;