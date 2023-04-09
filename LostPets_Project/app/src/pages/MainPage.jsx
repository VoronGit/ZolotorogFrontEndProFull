import { useState } from "react";
import styles from "./styles/mainPage.module.css";
import mainStyles from "../mainStyles.module.css";

import heroScreenPicture1 from "./resourses/mainPage/heroScreenPicture1.svg";
import heroScreenPicture2 from "./resourses/mainPage/heroScreenPicture2.svg";
import bottomPage from "./resourses/mainPage/bottomPage.svg";
import instagramIcon from "../icons/Instagram.svg";
import telegramIcon from "../icons/Telegram.svg";
import facebookIcon from "../icons/Facebook.svg";
import heartsIcon from "../icons/Heart.svg";
import essentialIcon from "../icons/Essential.svg";

import mainTextPicture1 from "../pictures/mainText1.png";
import mainTextPicture2 from "../pictures/mainText2.png";

import BigButton from "../components/BigButton";
import Carusel from "../components/Carusel";

import animal1 from "../animals/1.png";
import animal2 from "../animals/2.png";
import animal3 from "../animals/3.png";
import animal4 from "../animals/4.png";
import animal5 from "../animals/5.png";
import animal6 from "../animals/6.png";
import animal7 from "../animals/7.png";
import animal8 from "../animals/8.png";
import animal9 from "../animals/9.png";
import review1 from "../animals/review1.png";
import review2 from "../animals/review2.png";
import review3 from "../animals/review3.png";

const showMoreText = 'дізнатися більше...';
const showLessText = 'сховати';

let mainTextHidden = true;


const dataMock = [
    { img: animal1, cardName: "Знайдено кота sadas dsad asdsa sadas ds", animalSex: "Ч", lostFoundDate: "22.02.2023", address: "Харків, вул. Героїв праці Харків, вул. Героїв праці Харків, вул. Героїв праці", details: "Знайдено кота, хлопчик. Доглянутий, в ошийнику. Дуже сумує за господарями.. Знайдено кота, хлопчик. Доглянутий, в ошийнику. Дуже сумує за господарями.." },
    { img: animal2, cardName: "Знайдено песика", animalSex: "Ч", lostFoundDate: "22.02.2023", address: "Харків, вул. Героїв праці", details: "Знайдено кота, хлопчик. Доглянутий, в ошийнику. Дуже сумує за господарями.." },
    { img: animal3, cardName: "Знайдено пітона", animalSex: "-", lostFoundDate: "22.02.2023", address: "Харків, вул. Героїв праці", details: "Знайдено кота, хлопчик. Доглянутий, в ошийнику. Дуже сумує за господарями.." },
    { img: animal3, cardName: "Знайдено пса", animalSex: "Ч", lostFoundDate: "22.02.2023", address: "Харків, вул. Героїв праці", details: "Знайдено кота, хлопчик. Доглянутий, в ошийнику. Дуже сумує за господарями.." }
];

const dataMockGiveForFree = [
    { img: animal4, name: "Пуфік", details: "Хлопчик / 2 роки" },
    { img: animal5, name: "Карамелька", details: "Дівчинка / 3 роки" },
    { img: animal6, name: "Боня", details: "Дівчинка / 3 роки" },
    { img: animal7, name: "Мон", details: "Хлопчик / 1 рік" },
    { img: animal8, name: "Бетті", details: "Дівчинка / 2 роки" },
    { img: animal9, name: "Троя", details: "Дівчинка / 3 роки" },
];

const dataMockReviews = [
    { img: review1, name: "Роман та Бетті", details: "Завдяки сервісу дуже швидко знайшов свого загубленого пса. Дуже вдячний." },
    { img: review2, name: "Юля та Корж", details: "Давно родиною мріяли про кицьку. Побачивши полосатого Коржа на сайті не змогли втриматися і забрали його додому. Дякую!" },
    { img: review3, name: "Костя та Річард", details: "Ніколи не міг подумати, що можна отак взяти і покинути свою собаку. Дуже радий, що волонтери розповіли мені про цього хлопця. Тепер маємо на одного члена родини більше." },
];

function MainPage() {
    const [motivationTextOverflow, changeMotivationTextOverflow] = useState(styles.overflow2);
    const [showMoreButton, changeShowMoreButton] = useState(showMoreText);

    const showMainText = () => {
        if (mainTextHidden) {
            changeShowMoreButton(showLessText);
            changeMotivationTextOverflow('');
            mainTextHidden = false;
        } else {
            changeShowMoreButton(showMoreText);
            changeMotivationTextOverflow(styles.overflow2);
            mainTextHidden = true;
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.heroScreenMain}>
                <div className={styles.heroBackground}>
                    <img src={heroScreenPicture1} alt="picture" />
                    <img src={heroScreenPicture2} alt="picture" />
                </div>
                <div className="mainPageContainer">
                    <div className={styles.heroScreen}>
                        <div className={styles.heroInsideContainer}>
                            <div className={styles.heroHeaders}>
                                <h1 className={`${mainStyles.HeadLine1} ${mainStyles.TextMainColor5}`}>Сервіс з пошуку зниклих тварин</h1>
                                <h1 className={mainStyles.Body3}>Повноцінна база зниклих і знайдених домашніх тварин в Україні. Доступна цілодобово та без вихідних, зручний пошук</h1>
                            </div>
                            <div className={styles.buttonsAndSocials}>
                                <div className={styles.buttonsRow}>
                                    <BigButton buttonText="Знайдені" buttonStyle="Big"></BigButton>
                                    <BigButton buttonText="Зниклі" buttonStyle="Big"></BigButton>
                                </div>
                                <div className={styles.socialsRow}>
                                    <a href="" target="_blank"><img src={instagramIcon} alt="instagram" /></a>
                                    <a href="" target="_blank"><img src={telegramIcon} alt="telegram" /></a>
                                    <a href="" target="_blank"><img src={facebookIcon} alt="facebook" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.motivation}>
                <div className="mainPageContainer">
                    <div className={styles.motivationIns}>
                        <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>Чому ми це робимо?</h1>
                        <div className={styles.motivationMainText}>
                            <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor} ${motivationTextOverflow}`}>Бо любимо тварин незалежно від породи та вартості. Бо в Україні майже нема спеціалізованих баз даних зниклих тварин. Бо віримо, що якісна послуга може бути безкоштовною. Але деякі платні послуги та Ваші пожертви домопомагають допомагати цим малим створінням. Бо просто можемо. Бо любимо тварин незалежно від породи та вартості. Бо в Україні майже нема спеціалізованих баз даних зниклих тварин. Бо віримо, що якісна послуга може бути безкоштовною. Але деякі платні послуги та Ваші пожертви домопомагають допомагати цим малим створінням. Бо просто можемо. <br /> <br /> Бо любимо тварин незалежно від породи та вартості. Бо в Україні майже нема спеціалізованих баз даних зниклих тварин. Бо віримо, що якісна послуга може бути безкоштовною. Але деякі платні послуги та Ваші пожертви домопомагають допомагати цим малим створінням. Бо просто можемо.</h1>
                            <a onClick={showMainText}><h1 className={`${mainStyles.Body3} ${mainStyles.TextMainColor5} ${styles.clickableText}`}>{showMoreButton}</h1></a>
                        </div>
                        <div className={styles.mainTextPictures}>
                            <img src={mainTextPicture1} alt="picture" />
                            <img src={mainTextPicture2} alt="picture" />
                        </div>
                        <div className={styles.pointsRow}>
                            <div>
                                <img src={heartsIcon} alt="hearts" />
                                <div>
                                    <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>більше 40 песиків знайшли своїх господарів</h1>
                                </div>
                            </div>
                            <div>
                                <img src={heartsIcon} alt="hearts" />
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>більше 20 котів знайшли новий дім</h1>
                            </div>
                            <div>
                                <img src={heartsIcon} alt="hearts" />
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>більше 40 господарів скористалися послугами сітерів</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.howToHelp}>
                <div className="mainPageContainer">
                    <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>Чим можна допомогти нашому проєкту?</h1>
                    <div className={styles.howToHelpIns}>
                        <div>
                            <img src={essentialIcon} alt="essential" />
                            <div>
                                <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>В добрі руки</h1>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Візьміть тварину із притулку замість того, щоб купляти її у заводчиків, або зоомагазинах</h1>
                                <a><h1 className={`${mainStyles.Body3} ${mainStyles.TextMainColor5} ${styles.clickableText}`}>{showMoreButton}</h1></a>
                            </div>
                        </div>
                        <div>
                            <img src={essentialIcon} alt="essential" />
                            <div>
                                <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>Допомогти з перетримкою</h1>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Візьміть тварину на перетримку поки не знайдеться старий, чи новий господар</h1>
                                <a><h1 className={`${mainStyles.Body3} ${mainStyles.TextMainColor5} ${styles.clickableText}`}>{showMoreButton}</h1></a>
                            </div>
                        </div>
                        <div>
                            <img src={essentialIcon} alt="essential" />
                            <div>
                                <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>Стати волонтером</h1>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Доєднуйтесь до нашого проекту однодумців  та допомагайте тваринам</h1>
                                <a><h1 className={`${mainStyles.Body3} ${mainStyles.TextMainColor5} ${styles.clickableText}`}>{showMoreButton}</h1></a>
                            </div>
                        </div>
                        <div>
                            <img src={essentialIcon} alt="essential" />
                            <div>
                                <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>Допомога фондам</h1>
                                <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Кожен донат допомагає зоозахисникам рятувати більше тварин. Донать та отримуй плюс до карми</h1>
                                <a><h1 className={`${mainStyles.Body3} ${mainStyles.TextMainColor5} ${styles.clickableText}`}>{showMoreButton}</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lostFoundCardsCarusels}>
                <div className={`mainPageContainer ${styles.caruselWithButton}`}>
                    <div className={styles.carusele}>
                        <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>Їх нещодавно знайшли</h1>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>В нашому каталозі зібрані тварини, яких нещодавно знайшли небайдужі люди.  Ці хвостики дуже хочуть додому. Розкажіть про них в соц. мережах та допоможіть їм швидше повернутися додому.</h1>
                        <Carusel itemsList={dataMock} itemsType='BigCards'></Carusel>
                    </div>
                    <div >
                        <BigButton buttonText="Додати оголошення" buttonStyle="Small"></BigButton>
                    </div>
                </div>
            </div>
            <div className={styles.lostFoundCardsCarusels}>
                <div className={`mainPageContainer ${styles.caruselWithButton}`}>
                    <div className={styles.carusele}>
                        <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>Їх загубили та шукають</h1>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Цих тварин загубили господарі. Але ми дуже віримо в силу інтернету. Розкажіть про них в соц. мережах та допоможіть їм швидше повернутися додому.</h1>
                        <Carusel itemsList={dataMock} itemsType='BigCards'></Carusel>
                    </div>
                    <div>
                        <BigButton buttonText="Додати оголошення" buttonStyle="Small"></BigButton>
                    </div>
                </div>
            </div>
            <div className={styles.givingForFree}>
                <div className={`mainPageContainer`}>
                    <div className={styles.givingForFree}>
                        <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>В добрі руки</h1>
                        <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>Всі ці тварини готові знайти свій новий дім та справжню родину, яка їх полюбить. Тут ви знайдете свого найкращого друга, чи то дорослого песика чи маленького котеня. Вони будуть вашими найкращими друзями, які будуть безкунченно вдячні вам.</h1>
                        <div className={styles.givingForFreeRows}>
                            {dataMockGiveForFree.map(el => 
                                <div className={styles.forFreeCard} key={el.name + el.details}>
                                    <img src={el.img} alt="animal" />
                                    <h1 className={`${mainStyles.HeadLine3} ${mainStyles.TextMainColor5}`}>{el.name}</h1>
                                    <h1 className={`${mainStyles.Body3} ${mainStyles.textMainColor}`}>{el.details}</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lostFoundCardsCarusels}>
                <div className={`mainPageContainer ${styles.caruselWithButton}`}>
                    <div className={styles.carusele}>
                        <h1 className={`${mainStyles.HeadLine2} ${mainStyles.TextMainColor5}`}>Відгуки</h1>
                        <Carusel itemsList={dataMockReviews}></Carusel>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBackground}>
                    <img src={bottomPage} alt="picture" />
            </div>
        </div >
    );
}

export default MainPage;