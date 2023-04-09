import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

import styles from "./styles/profilePage.module.css";
import mainStyles from "../mainStyles.module.css";

import NavigationBar from "../components/NavigationBar";

import image from "../pictures/profileBack.png";

function ProfilePage({ }) {

    const navElems = [
        { page: "", name: "Мій профіль", active: true, link: "/profile" },
        { page: "messages", name: "Повідомлення", active: false, link: "/profile/messages" },
        { page: "adverts", name: "Оголошення", active: false, link: "/profile/adverts" },
        { page: 4, name: "Вийти", active: false, link: "/sign-in" }
    ];

    const [currentElems, changeCurrentElems] = useState(navElems);

    const onClick = (event) => {
        setCurrentNavItem(event.target.getAttribute("data-page"));
    };

    const setCurrentNavItem = (page = null) => {
        if (!page && page !== "") {
            page = window.location.href.split("/profile")[1].replace("/","").replace(/\/.+$/g, "");
        }
        navElems.forEach(el => el.active = false);
        navElems.find(el => el.page == page).active = true;
        changeCurrentElems([...navElems]);
    }

    useEffect(() => {
        setCurrentNavItem();
    }, []);

    return (
        <div className={styles.main}>
            <div>
                <div className="mainPageContainer">
                        <NavigationBar callback={setCurrentNavItem}></NavigationBar>
                </div>
            </div>
            <div className={styles.mainBlock}>
                <div className="mainPageContainer">
                    <div className={styles.mainWrap}>
                        <div className={styles.navigationBar}>
                            {currentElems.map(el =>
                                <Link key={el.page} to={el.link} style={{ textDecoration: 'none' }}>
                                    <h1 onClick={onClick} data-page={el.page} className={`${el.active ? mainStyles.Body1 : mainStyles.Body2} ${mainStyles.TextMainColor5}`}>{el.name}</h1>
                                </Link>)
                            }
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <img className={styles.backgroundImg} src={image} />
        </div>
    );
}

export default ProfilePage;