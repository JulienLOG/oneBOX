import styles from "../assets/styles/components/updateTaskForm.module.scss";

export default function UpdateTaskForm({ inputName, inputPlaceholder, updateTask}) {

    const handleChange = (e) => {

    };

    return (
        <form className={ styles.updateTaskForm } onChange={ handleChange }>
            <label  htmlFor={ inputName }>{ inputPlaceholder }</label>
            <input id={ inputName } name={ inputName } type="text" placeholder={ inputPlaceholder }/>
        </form>
    );
};