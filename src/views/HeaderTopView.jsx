import styles from "../assets/styles/views/headerTopView.module.scss";
import ButtonHome from "../components/ButtonHome.jsx";
import NavHeaderView from "../views/NavHeaderView.jsx";

export default function HeaderTopView() {

    return (
        <header className={ styles.headerTopView }>
            <ButtonHome path="/" title="oneBOX" author="by julienLOG" />
            <NavHeaderView />
        </header>
    );
};