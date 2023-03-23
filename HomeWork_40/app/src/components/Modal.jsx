import styles from "../styles/modal.module.css";
import Card from './Card.jsx';

function Modal(props) {
    return (
        <div key='modal' canclose='true' className={styles.background} onClick={props.closeOnClick}>
            <div className={styles.body}>
                <h1 className="nonselect">The most popular emoji(-s) is:</h1>
                <div className={`${styles.cardHolder} nonselect`}>
                    {props.emoji.map(el => { return <Card key={'modalCard' + el.id}emoji={el} onClick={props.onClickCastVote}></Card> })}
                </div>
            </div>
        </div>
    );
}

export default Modal;