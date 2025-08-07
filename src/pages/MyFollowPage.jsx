import styles from "../assets/styles/pages/myFollowPage.module.scss";

export default function MyFollowPage({ children }) {

    return (
        <div className={ styles.myFollowPage }>{ children }</div>
    );
};