import { useState } from "react";
import { taskModel } from "../models/taskModel.js";
import styles from "../assets/styles/pages/tasksPage.module.scss";
import ButtonLinkArrow from "../components/ButtonLinkArrow.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
import TasksContainerView from "../views/TasksContainerView.jsx";
import TaskItemView from "../views/TaskItemView.jsx";
import arrowTop from "../assets/images/btnArrowTop.svg";

export default function TasksPage() {

    const [task, setTask] = useState([]);

    const addNewTask = (newTask) => {
        setTask([...task, taskModel(newTask)])
    }
    console.log(task)

    return (
        <main className={ styles.tasksPage }>
            <div>
                <ButtonLinkArrow path="/" img={ arrowTop } text="Return Top" position="top"/>
            </div>
            <div>
                <TasksContainerView>
                    { task.length !== 0 ? task.map((itt) => (
                        <TaskItemView key={itt.id} text={ itt.content }/>
                    )) : <p>Task not found, create a task ! ✍️</p>
                }
                </TasksContainerView>
            </div>
            <AddTaskForm inputName="AddTask" inputPlaceholder="Add a new taks here ..." buttonText="Create" addNewTask={ addNewTask }/>
        </main>
    );
};