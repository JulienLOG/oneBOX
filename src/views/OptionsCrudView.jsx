import styles from "../assets/styles/views/optionsCrudView.module.scss";
import ButtonCrud from "../components/ButtonCrud.jsx";

export default function OptionsCrudView({ id, doneTask, editTask, deleteTask }) {

    return (
        <ul className={ styles.optionsCrudView }>
            <ButtonCrud handleClick={ () => doneTask(id) } option="validate" />
            <ButtonCrud handleClick={ () => editTask(id) } option="update" />
            <ButtonCrud handleClick={ () => deleteTask(id) } option="delete" />
        </ul>
    );
};