import styles from "../assets/styles/components/taskItem.module.scss";

export default function TaskItem({ text }) {

    return (
        <p className={ styles.taskItem }>{ text }</p>
    );
};