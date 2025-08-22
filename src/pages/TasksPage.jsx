import { useState } from "react";
import { taskModel } from "../models/taskModel.js";
import styles from "../assets/styles/pages/tasksPage.module.scss";
import ButtonLinkArrow from "../components/ButtonLinkArrow.jsx";
import FormAddTask from "../views/FormAddTask.jsx";
import TasksContainerView from "../views/TasksContainerView.jsx";
import TaskItemView from "../views/TaskItemView.jsx";
import arrowTop from "../assets/images/btnArrowTop.svg";

export default function TasksPage() {

    const [task, setTask] = useState([]);

    const addNewTask = newTask => setTask([...task, taskModel(newTask)]);
    const doneTask = id => setTask(tasks => tasks.map(itt => itt.id === id ? ({ ...itt, done: !itt.done }) : itt));
    const editTask = id => setTask(tasks => tasks.map(itt => itt.id === id ? ({ ...itt, edit: !itt.edit }) : itt));
    const updateTask = (id, content) => setTask(tasks => tasks.map(itt => itt.id === id ? ({...itt, content: content}) : itt));
    const deleteTask = id => setTask([...task].filter( itt => id !== itt.id ));
    console.log(task);

    return (
        <main className={ styles.tasksPage }>
            <div>
                <ButtonLinkArrow path="/" img={ arrowTop } text="Return Top" position="top"/>
            </div>
            <div>
                <TasksContainerView>
                    { task.length !== 0 ? task.map((itt) => (
                        <TaskItemView key={itt.id} id={ itt.id } text={ itt.content } doneTask={ doneTask } edit={ itt.edit } editTask={ editTask } updateTask={ updateTask } deleteTask={ deleteTask }/>
                    )) : <p>Task not found, create a task ! ✍️</p>
                }
                </TasksContainerView>
            </div>
            <aside>
                <FormAddTask inputName="AddTask" inputPlaceholder="Add a new taks here ..." buttonText="Create" addNewTask={ addNewTask }/>
            </aside>
        </main>
    );
};