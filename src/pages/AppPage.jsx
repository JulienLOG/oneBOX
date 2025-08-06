import styles from "../assets/styles/pages/appPage.module.scss";

export default function AppPage({ children }) {

    return (
        <div className={styles.appPage}>{ children }</div>
    )
}