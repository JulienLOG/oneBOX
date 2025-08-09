import styles from "../assets/styles/views/taskItemView.module.scss";

export default function TaskItemView({ children }) {

    return (
        <li className={ styles.taskItemView }>{ children }</li>
    );
};