import styles from "../assets/styles/pages/aboutPage.module.scss";

export default function AboutPage({ children }) {

    return (
        <div className={ styles.aboutPage }>{ children }</div>
    );
};