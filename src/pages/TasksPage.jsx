import { useContext } from "react";
import { taskModel } from "../models/TaskReducer.js";
import { ApiTaskContext } from "../context/ApiTaskContext.jsx";
import styles from "../assets/styles/pages/tasksPage.module.scss";
import ButtonLinkArrow from "../components/ButtonLinkArrow.jsx";
import FormAddTask from "../views/FormAddTask.jsx";
import TasksContainerView from "../views/TasksContainerView.jsx";
import TaskItemView from "../views/TaskItemView.jsx";
import arrowTop from "../assets/images/btnArrowTop.svg";

export default function TasksPage() {
    
    const {state : task, actions} = useContext(ApiTaskContext);
    console.log("context and reducer from ApiTaskContext :", task, actions);

    return (
        <main className={ styles.tasksPage }>
            <div>
                <ButtonLinkArrow 
                    path="/" 
                    img={ arrowTop } 
                    text="Return Top" 
                    position="top"
                />
            </div>
            <div>
                <TasksContainerView>
                    { task.length !== 0 
                        ? task.map((itm) => (
                            <TaskItemView 
                                key={itm.id} 
                                id={ itm.id } 
                                text={ itm.content } 
                                edit={ itm.edit } 
                                doneTask={actions.doneTask} 
                                editTask={actions.editTask} 
                                updateTask={actions.updateTask} 
                                deleteTask={actions.deleteTask}
                            />)) 
                        : <p>Task not found, create a task ! ✍️</p>
                }
                </TasksContainerView>
            </div>
            <aside>
                <FormAddTask 
                    inputName="AddTask" 
                    inputPlaceholder="Add a new taks here ..." 
                    buttonText="Create" 
                    addTask={actions.addTask}
                />
            </aside>
        </main>
    );
};