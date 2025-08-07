import styles from "../assets/styles/pages/tasksPage.module.scss";

export default function TasksPage({ children }) {

    return (
        <div className={ styles.tasksPage }>{ children }</div>
    );
};