import styles from "../assets/styles/views/formAddTask.module.scss";
import ButtonKbd from "../components/ButtonKbd";

export default function FormAddTask({ inputName, inputPlaceholder, buttonText, addNewTask}) { 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target[inputName].value;
        addNewTask(value);
        e.target[inputName].value = "";
    };

    return (
        <form className={ styles.formAddTask } onSubmit={ handleSubmit }>
            <fieldset>
                <label  htmlFor={ inputName }>{ inputPlaceholder }</label>
                <input id={ inputName } name={ inputName } type="text" placeholder={ inputPlaceholder }/>
            </fieldset>
            <button type="submit">
                { buttonText }
                <ButtonKbd text="H" styleMode="white" />
            </button>
        </form>
    );
};