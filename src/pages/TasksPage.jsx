import { useState } from "react";
import { taskModel } from "../models/taskModel.js";
import styles from "../assets/styles/pages/tasksPage.module.scss";
import AddTaskForm from "../components/AddTaskForm.jsx";
import TasksContainerView from "../views/TasksContainerView.jsx";
import TaskItemView from "../views/TaskItemView.jsx";
import TaskItem from "../components/TaskItem.jsx";
import ButtonTask from "../components/ButtonTask.jsx";
import OptionsCrudView from "../views/OptionsCrudView.jsx";

export default function TasksPage() {

    const [task, setTask] = useState([]);

    const addNewTask = (newTask) => {
        setTask([...task, taskModel(newTask)])
    }
    console.log(task)

    return (
        <div className={ styles.tasksPage }>
            <TasksContainerView>
                { task.length !== 0 ? task.map((itt) => (
                    <TaskItemView key={itt.id}>
                        <TaskItem text={itt.content} />
                            <ButtonTask />
                        <OptionsCrudView />
                    </TaskItemView> 
                    )) : <p>Task not found, create a task ! ✍️</p>
                }
            </TasksContainerView>
            <AddTaskForm inputName="AddTask" inputPlaceholder="Add a new taks here ..." buttonText="Create" addNewTask={ addNewTask }/>
        </div>
    );
};