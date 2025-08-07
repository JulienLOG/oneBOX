import { Outlet } from "react-router";
import styles from "../assets/styles/pages/appPage.module.scss";
import HeaderTopView from "../views/HeaderTopView.jsx";

export default function AppPage() {

    return (
        <div className={styles.appPage}>
            <HeaderTopView />
            <Outlet />
        </div>
    );
};