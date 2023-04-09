import styles from "./styles/tag.module.css";
import mainStyles from "../mainStyles.module.css";

function Tag({ text}) {
    return (
        <div className={styles.main}>
            <h1 className={`${mainStyles.Details} ${mainStyles.TextMainColor5}`}>{text}</h1>
        </div>
    );
}

export default Tag;