import { useState } from "react";
import styles from "../assets/styles/views/taskItemView.module.scss";
import ButtonDoneCube from "../components/ButtonDoneCube.jsx";
import TaskItem from "../components/TaskItem.jsx";
import UpdateTaskForm from "../components/updateTaskForm.jsx";
import ButtonOpenOption from "../components/ButtonOpenOption.jsx";
import OptionsCrudView from "../views/OptionsCrudView.jsx";

export default function TaskItemView({ id, text, doneTask, edit, editTask, updateTask, deleteTask }) {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = (bool) => setIsOpen(bool);
    const handleChange = e => e && updateTask(id, e.target.value);
    console.log("Edit :", edit)
    console.log("IsOpen :", isOpen)


    return (
        <li className={ styles.taskItemView }>
            <ButtonDoneCube />
            { 
                edit === true 
                ? <UpdateTaskForm inputName="updateInput" inputPlaceholder={ text } handleChange={ handleChange }/> 
                : <TaskItem text={ text } handleToggle={ isOpen }/>
            }
            <ButtonOpenOption isOpen={ isOpen } handleToggle={ handleToggle } />
            { 
                isOpen 
                    && <OptionsCrudView 
                            id={ id } 
                            isOpen={ isOpen } 
                            handleToggle={ handleToggle } 
                            deleteTask={ deleteTask } 
                            editTask={ editTask } 
                            doneTask={ doneTask } 
                        />
            }
        </li>
    );
};