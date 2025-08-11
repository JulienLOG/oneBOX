import styles from "../assets/styles/views/optionsCrudView.module.scss";
import btnCheck from "../assets/images/btnCheck.svg";
import btnEdit from "../assets/images/btnEdit.svg";
import btnBin from "../assets/images/btnBin.svg";

import ButtonCrud from "../components/ButtonCrud.jsx";

export default function OptionsCrudView({ id, doneTask, editTask, deleteTask }) {

    return (
        <ul className={ styles.optionsCrudView }>
            <ButtonCrud handleClick={ () => doneTask(id) } img={ btnCheck } option="validate" />
            <ButtonCrud handleClick={ () => editTask(id) } img={ btnEdit } option="update" />
            <ButtonCrud handleClick={ () => deleteTask(id) } img={ btnBin } option="delete" />
        </ul>
    );
};