import styles from "../assets/styles/pages/tasksPage.module.scss";
import AddTaskForm from "../components/AddTaskForm.jsx";

export default function TasksPage() {

    return (
        <div className={ styles.tasksPage }>
            <AddTaskForm inputName="AddTask" inputPlaceholder="Add a new taks here ..." buttonText="Create" />
        </div>
    );
};