import styles from "../assets/styles/components/addTaskForm.module.scss";

export default function AddTaskForm({ inputName, inputPlaceholder, buttonText }) { 
    
    const handleClick = (e) => e.preventDefault();

    return (
        <form className={ styles.addTaskForm }>
            <label  htmlFor={ inputName }>{ inputPlaceholder }</label>
            <input id={ inputName } name={ inputName } type="text" placeholder={ inputPlaceholder }/>
            <button type="submit" onClick={ handleClick }>{ buttonText }</button>
        </form>
    );
};