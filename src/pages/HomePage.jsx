import styles from "../assets/styles/pages/homePage.module.scss";

export default function HompePage({ children }) { 

    return (
        <main className={ styles.homePage }>{ children }</main>
    );
};