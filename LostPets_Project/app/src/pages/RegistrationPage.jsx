import { useState, useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";

import styles from "./styles/registrationPage.module.css";
import mainStyles from "../mainStyles.module.css";

import NavigationBar from "../components/NavigationBar";
import BigButton from "../components/BigButton";

import facebookIcon from "../icons/Facebook.svg";
import googleIcon from "../icons/Google.svg";
import anotherIcon from "../icons/Gmail.svg";

import picture1 from "../pages/resourses/signInPage/picture1.svg";
import picture2 from "../pages/resourses/signInPage/picture2.svg";

const auth = true;

function RegistrationPage({ type }) {
    const dispatch = useDispatch();

    const login = useRef(null);
    const password = useRef(null);

    const [isEmail, changeCurrState] = useState(true);
    const [isLoginValid, changeInputLoginValid] = useState(true);
    const [isPasswordValid, changeInputPasswordValid] = useState(true);
    const [loginErrorText, changeLoginErrorText] = useState('');
    const [passwordErrorText, changePasswordErrorText] = useState('');
    const [buttonMuted, changeButtonMuted] = useState(true);

    const onClick = () => {
        changeInputLoginValid(true);
        changeInputPasswordValid(true);
        changeButtonMuted(true);
        login.current.value = '';
        password.current.value = '';
        changeCurrState(!isEmail);
    }

    useEffect(() => {
        dispatch({ type: "CHANGE_PATH", payload: { path: [{ name: "Головна", link: "/" }, { name: "Мій обліковий запис", link: auth ? "/profile" : "/sign-in" }, { name: "Реєстрація", link: "" }] } });
    }, []);

    let loginTimeout;
    const onInputLogin = () => {
        clearTimeout(loginTimeout);
        changeButtonMuted(true);
        loginTimeout = setTimeout(() => {
            if (login.current.value) {
                if (isEmail) {
                    if (/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(login.current.value)) {
                        changeInputLoginValid(true);
                        changeButtonMuted(!(isPasswordValid && password.current.value));
                    } else {
                        changeInputLoginValid(false);
                        changeLoginErrorText('Введіть коректну пошту!');
                    }
                } else {
                    if (/^\+380[0-9]{9}$/u.test(login.current.value)) {
                        changeInputLoginValid(true);
                        changeButtonMuted(!(isPasswordValid && password.current.value));
                    } else {
                        changeInputLoginValid(false);
                        changeLoginErrorText('Введіть номер телефону в форматі +380123456789!');
                    }
                }
            } else {
                changeInputLoginValid(false);
                changeLoginErrorText(isEmail ? 'Введіть пошту!' : 'Введіть номер телефону!');
                changeButtonMuted(true);
            }
        }, 2000);
    }

    let passwordTimeout;
    const onInputPassword = () => {
        clearTimeout(passwordTimeout);
        changeButtonMuted(true);
        passwordTimeout = setTimeout(() => {
            if (password.current.value) {
                if (/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password.current.value)) {
                    changeInputPasswordValid(true);
                    changeButtonMuted(!(isLoginValid && login.current.value));
                } else {
                    changeInputPasswordValid(false);
                    changePasswordErrorText('Пароль має містити не меньше 6 символів, великі та маленькі букви латинського алфавіту а також цифри та спеціальні символи!');
                }
            } else {
                changeInputPasswordValid(false);
                changePasswordErrorText('Введіть пароль!');
                changeButtonMuted(true);
            }
        }, 2000);
    }

    return (
        <div className={styles.main}>
            <div>
                <div className="mainPageContainer">
                    <NavigationBar></NavigationBar>
                </div>
            </div>
            <div className={styles.signWithPicBox}>
                <div className="mainPageContainer">
                    <div className={styles.signInBox}>
                        <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Реєстрація</h1>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor} ${styles.textLeft}`}>Зареєструватися за допомогою номера телефону або пошти</h1>
                        <div className={styles.mainForm}>
                            <div className={styles.selector}>
                                <div onClick={onClick} className={isEmail ? styles.mainForm : `${styles.mainForm} ${styles.notActive}`}>
                                    <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5} ${isEmail ? "" : styles.notActiveText}`}>Email</h1>
                                </div>
                                <div onClick={onClick} className={isEmail ? `${styles.mainForm} ${styles.notActive}` : styles.mainForm}>
                                    <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5} ${isEmail ? styles.notActiveText : ""}`}>Номер телефону</h1>
                                </div>
                            </div>
                            <div className={styles.input}>
                                <input className={isLoginValid ? "" : styles.inputNotValid} ref={login} type="text" onChange={onInputLogin} placeholder={isEmail ? 'Email' : '+380'} />
                                {!isLoginValid ? <h1 className={`${mainStyles.Details} ${styles.errorText}`}>{loginErrorText}</h1> : ""}
                            </div>
                            <div className={styles.input}>
                                <input className={isPasswordValid ? "" : styles.inputNotValid} ref={password} type="password" onChange={onInputPassword} placeholder='Пароль' />
                                {!isPasswordValid ? <h1 className={`${mainStyles.Details} ${styles.errorText}`}>{passwordErrorText}</h1> : ""}
                            </div>
                        </div>
                        <BigButton isDisabled={buttonMuted} buttonText='Продовжити' buttonStyle="SmallLong"></BigButton>
                        <div className={styles.orWrap}>
                            <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 1L99.5 0.999991" stroke="#524F4E" />
                            </svg>
                            <h1 className={`${mainStyles.Body1} ${mainStyles.TextMainColor5}`}>Або</h1>
                            <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 1L99.5 0.999991" stroke="#524F4E" />
                            </svg>
                        </div>
                        <div className={styles.signVia}>
                            <div>
                                <img src={facebookIcon} alt="picture" />
                                <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>Facebook</h1>
                            </div>
                            <div>
                                <img src={googleIcon} alt="picture" />
                                <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>Google</h1>
                            </div>
                            <div>
                                <img src={anotherIcon} alt="picture" />
                                <h1 className={`${mainStyles.Details} ${mainStyles.textMainColor}`}>Інше</h1>
                            </div>
                        </div>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor} ${styles.textLeft}`}>Натискаючи Продовжити, Ви приймаєте <b>Політику конфіденційності</b>.</h1>
                        <svg width="325" height="2" viewBox="0 0 325 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 1L324.5 1.00003" stroke="#524F4E" />
                        </svg>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Вже маєте аккаунт? <b className={`${mainStyles.TextMainColor5}`}>Увійти</b></h1>
                    </div>
                    <img src={picture1} />
                </div>
            </div>
            <div className={styles.backPicture}>
                <img src={picture2} />
            </div>
        </div>
    );
}

export default RegistrationPage;