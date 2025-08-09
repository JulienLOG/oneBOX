import styles from '../assets/styles/views/tasksContainerView.module.scss';

export default function TasksContainerView({ children }) {
    return (
        <ul className={ styles.tasksContainerView }>{ children }</ul>
    );
};