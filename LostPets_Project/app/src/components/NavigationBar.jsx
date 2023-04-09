import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles/navigationBar.module.css";
import mainStyles from "../mainStyles.module.css";

function NavigationBar() {

    const currPath = useSelector(((state) => state.lost.path));

    return (
        <div className={styles.main}>
            {currPath.length > 0 ? currPath.slice(0, -1).map(el =>
                <div key={el.name}>
                    <Link to={el.link} style={{ textDecoration: 'none' }}><h1 className={`${mainStyles.HeadLine4} ${mainStyles.textMainColor}`}>{el.name}</h1></Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z" fill="#C1C1C1" />
                    </svg>

                </div>
            ) : <div></div>}
            <h1 className={`${mainStyles.HeadLine4} ${mainStyles.TextMainColor5}`}>{currPath[currPath.length - 1].name}</h1>
        </div>
    );
}

export default NavigationBar;