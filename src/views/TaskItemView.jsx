import { useState } from "react";
import styles from "../assets/styles/views/taskItemView.module.scss";
import ButtonDoneCube from "../components/ButtonDoneCube.jsx";
import TaskItem from "../components/TaskItem.jsx";
import UpdateTaskForm from "../components/updateTaskForm.jsx";
import ButtonOpenOption from "../components/ButtonOpenOption.jsx";
import OptionsCrudView from "../views/OptionsCrudView.jsx";

export default function TaskItemView({ id, text, deleteTask, doneTask }) {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = (bool) => setIsOpen(bool);

    return (
        <li className={ styles.taskItemView }>
            <ButtonDoneCube />
            <TaskItem text={ text } handleToggle={ isOpen }/>
            <UpdateTaskForm inputName="updateInput" inputPlaceholder="Update task" updateTask={null}/>
            <ButtonOpenOption isOpen={ isOpen } handleToggle={ handleToggle } />
            { isOpen && <OptionsCrudView id={ id } deleteTask={ deleteTask } doneTask={ doneTask }/>}
        </li>
    );
};