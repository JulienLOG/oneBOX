import styles from '../assets/styles/views/tasksContainerView.module.scss';

export default function TasksContainerView({ children }) {
    return (
        <main className={ styles.tasksContainerView }>{ children }</main>
    );
};