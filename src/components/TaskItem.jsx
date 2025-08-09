import styles from "../assets/styles/components/taskItem.module.scss";

export default function TaskItem({ text }) {

    return (
        <li className={ styles.taskItem }>{ text }</li>
    );
};