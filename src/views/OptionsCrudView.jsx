import styles from "../assets/styles/views/optionsCrudView.module.scss";
import ButtonCrud from "../components/ButtonCrud.jsx";

export default function OptionsCrudView({ id, deleteTask, doneTask }) {

    return (
        <ul className={ styles.optionsCrudView }>
            <ButtonCrud handleClick={ () => doneTask(id) } option="validate" />
            <ButtonCrud handleClick={ () => deleteTask(id) } option="delete" />
            <ButtonCrud handleClick={ () => console.log("Click option update !") } option="update" />
        </ul>
    );
};