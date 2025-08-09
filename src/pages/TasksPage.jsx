import { useState } from "react";
import { taskModel } from "../models/taskModel.js";
import styles from "../assets/styles/pages/tasksPage.module.scss";
import AddTaskForm from "../components/AddTaskForm.jsx";
import TaskItem from "../components/TaskItem.jsx";

export default function TasksPage() {

    const [task, setTask] = useState([]);

    const addNewTask = (newTask) => {
        setTask([...task, taskModel(newTask)])
    }
    console.log(task)

    return (
        <div className={ styles.tasksPage }>
            <TaskItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <AddTaskForm inputName="AddTask" inputPlaceholder="Add a new taks here ..." buttonText="Create" addNewTask={ addNewTask }/>
        </div>
    );
};