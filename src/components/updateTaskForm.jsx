import styles from "../assets/styles/components/updateTaskForm.module.scss";

export default function UpdateTaskForm({ inputName, inputPlaceholder, handleChange }) {

    return (
        <form className={ styles.updateTaskForm }>
            <label  htmlFor={ inputName }>{ inputPlaceholder }</label>
            <input id={ inputName } name={ inputName } type="text" placeholder={ inputPlaceholder } onChange={ handleChange }/>
        </form>
    );
};