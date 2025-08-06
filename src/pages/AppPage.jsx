import styles from "../assets/styles/pages/appPage.module.scss";
import HeaderTopView from "../views/HeaderTopView.jsx";

export default function AppPage({ children }) {

    return (
        <div className={styles.appPage}>
            <HeaderTopView />
            { children }
        </div>
    );
};