import styles from "../assets/styles/pages/homePage.module.scss";
import ButtonLinkArrow from "../components/ButtonLinkArrow.jsx";
import btnArrowLeft from "../assets/images/btnArrowLeft.svg";
import btnArrowRight from "../assets/images/btnArrowRight.svg";
import btnArrowBottom from "../assets/images/btnArrowBottom.svg";

export default function HompePage({ children }) { 

    return (
        <main className={ styles.homePage }>
            <nav>
                <div>
                    <ButtonLinkArrow path="/about" img={ btnArrowLeft } text="about" position="left"/>
                    <ButtonLinkArrow path="/follow" img={ btnArrowRight } text="my follow" position="right"/>
                </div>
                <div>
                    <ButtonLinkArrow path="/tasks" img={ btnArrowBottom } text="see tasks" position="bottom"/>
                </div>
            </nav>
        </main>
    );
};