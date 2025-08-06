import styles from "../assets/styles/views/headerTopView.module.scss";
import TitleMain from "../components/TitleMain.jsx";
import NavHeaderView from "../views/NavHeaderView.jsx";

export default function HeaderTopView() {

    return (
        <header className={ styles.headerTopView }>
            <TitleMain title="oneBOX" author="by julienLOG" />
            <NavHeaderView />
        </header>
    );
};