import styles from "../assets/styles/views/headerTopView.module.scss";
import ButtonHome from "../components/ButtonHome.jsx";
import ButtonKbd from "../components/ButtonKbd.jsx";
import NavHeaderView from "../views/NavHeaderView.jsx";

export default function HeaderTopView() {

    return (
        <header className={ styles.headerTopView }>
            <div>
                <ButtonHome path="/" title="oneBOX" author="by JulienLOG" />
                <ButtonKbd text="H" />
            </div>
            <NavHeaderView />
        </header>
    );
};