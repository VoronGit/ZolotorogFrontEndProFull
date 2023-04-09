import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logoDark from "./resources/LogoDark.svg";
import saved from "../icons/Saved.svg";
import profile from "../icons/Profile.svg";

import styles from "./styles/header.module.css";
import mainStyles from "../mainStyles.module.css";

const headerLinks = [
    { title: "Знайдені", link: "/found" },
    { title: "Зниклі", link: "/lost" },
    { title: "В добрі руки", link: "" },
    { title: "Допомога", link: "" },
    { title: "Сітери", link: "/sitters" },
    { title: "Про нас", link: "" }
];

const auth = false;

function Header({ checkAuth }) {
    const [onScroll, setOnScroll] = useState(styles.main);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setOnScroll(window.pageYOffset === 0 ? styles.main : `${styles.main} ${styles.onScroll}`)
            );
        }
    }, []);

    return (
        <div className={styles.withFake}>
            <div className={onScroll}>
                <div className={`${styles.container} mainPageContainer`}>
                    <Link to={''}>
                        <img src={logoDark} alt="Logo" />
                    </Link>
                    <div className={styles.links}>
                        {headerLinks.map(el =>
                            <Link key={el.title} to={el.link} style={{ textDecoration: 'none' }}>
                                <h1 className={`${mainStyles.HeadLine4} ${mainStyles.textMainColor}`} key={el.title}>{el.title}</h1>
                            </Link>)}
                    </div>
                    <div className={styles.end}>
                        <img src={saved} alt="Saved" />
                        <Link to={auth ? '/profile' : '/sign-in'}>
                            <img src={profile} alt="Profile" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;