import styles from "../assets/styles/pages/homePage.module.scss";
import ButtonLinkArrow from "../components/ButtonLinkArrow.jsx";
import btnArrowLeft from "../assets/images/btnArrowLeft.svg";
import btnArrowRight from "../assets/images/btnArrowRight.svg";
import btnArrowBottom from "../assets/images/btnArrowBottom.svg";
import SectionContent from "../components/SectionContent.jsx";
import CubeContainer from "../components/CubeContainer.jsx";

export default function HompePage({ children }) { 

    return (
        <main className={ styles.homePage }>
            <div>
                <CubeContainer />
            </div>
            <SectionContent title="Welcome" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam." />
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