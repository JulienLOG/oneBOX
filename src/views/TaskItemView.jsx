import styles from "../assets/styles/views/taskItemView.module.scss";

export default function TaskItemView({ children }) {

    return (
        <article className={ styles.taskItemView }>{ children }</article>
    );
};