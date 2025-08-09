import styles from "../assets/styles/components/taskItem.module.scss";

export default function TaskItem({ text, handleToggle }) {

    return (
        <p className={`${ styles.taskItem } ${ handleToggle && styles.taskItem__isOpen }`}>{ text }</p>
    );
};