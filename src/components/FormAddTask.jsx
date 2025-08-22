import styles from "../assets/styles/components/formAddTask.module.scss";

export default function FormAddTask({ inputName, inputPlaceholder, buttonText, addNewTask}) { 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target[inputName].value;
        addNewTask(value);
        e.target[inputName].value = "";
    };

    return (
        <form className={ styles.formAddTask } onSubmit={ handleSubmit }>
            <label  htmlFor={ inputName }>{ inputPlaceholder }</label>
            <input id={ inputName } name={ inputName } type="text" placeholder={ inputPlaceholder }/>
            <button type="submit">{ buttonText }</button>
        </form>
    );
};