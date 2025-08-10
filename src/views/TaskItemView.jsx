import { useState } from "react";
import styles from "../assets/styles/views/taskItemView.module.scss";
import TaskItem from "../components/TaskItem.jsx";
import ButtonOpenOption from "../components/ButtonOpenOption.jsx";
import OptionsCrudView from "../views/OptionsCrudView.jsx";

export default function TaskItemView({ id, text, deleteTask }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = (bool) => setIsOpen(bool);

    return (
        <li className={ styles.taskItemView }>
            <TaskItem text={ text } handleToggle={ isOpen }/>
            <ButtonOpenOption isOpen={ isOpen } handleToggle={ handleToggle } />
            { isOpen && <OptionsCrudView id={ id } deleteTask={ deleteTask }/>}
        </li>
    );
};