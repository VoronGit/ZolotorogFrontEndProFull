import { Link } from "react-router-dom";
import logoWhite from "./resources/LogoWhite.svg";

import styles from "./styles/footer.module.css";
import mainStyles from "../mainStyles.module.css";

const headerLinks = [
    { id: 1, ins: [{ title: "Знайдені", link: "/found" }, { title: "Коти", link: "" }, { title: "Собаки", link: "" }, { title: "Інші тварини", link: "" }] },
    { id: 2, ins: [{ title: "Зниклі", link: "/lost" }, { title: "Коти", link: "" }, { title: "Собаки", link: "" }, { title: "Інші тварини", link: "" }] },
    { id: 3, ins: [{ title: "В добрі руки", link: "" }, { title: "Коти", link: "" }, { title: "Собаки", link: "" }, { title: "Інші тварини", link: "" }] },
    { id: 4, ins: [{ title: "Допомога", link: "" }, { title: "Волонтери", link: "" }, { title: "Перетримка", link: "" }, { title: "Благодійні фонди", link: "" }] },
    { id: 5, ins: [{ title: "Сітери", link: "/sitters" }, { title: "Вигул", link: "" }, { title: "Няня", link: "" }] },
    { id: 6, ins: [{ title: "Про нас", link: "" }] }
];

function Footer() {
    return (
        <div className={styles.withFake}>
            <div className={styles.main}>
                <div className={`${styles.container} mainPageContainer`}>
                    <Link to={''}>
                        <img src={logoWhite} alt="Logo" />
                    </Link>
                    {headerLinks.map(el =>
                        <div key={el.id} className={styles.column}>
                            {el.ins.map(elI =>
                                <Link key={elI.title} to={elI.link} style={{ textDecoration: 'none' }}>
                                    <h1 className={`${mainStyles.Body3} ${mainStyles.footerText}`} key={elI.title}>{elI.title}</h1>
                                </Link>)}
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;