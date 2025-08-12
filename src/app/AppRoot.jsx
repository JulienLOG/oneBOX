import { Outlet } from "react-router";
import styles from "../assets/styles/app/appRoot.module.scss";
import HeaderTopView from "../views/HeaderTopView.jsx";

export default function AppRoot() {

    return (
        <div className={styles.appRoot}>
            <HeaderTopView />
            <Outlet />
        </div>
    );
};