import { useState } from "react";
import styles from "../assets/styles/views/optionsCrudView.module.scss";
import btnClose from "../assets/images/btnClose.svg";
import btnSave from "../assets/images/btnSave.svg";
import btnBack from "../assets/images/btnBack.svg";
import btnCheck from "../assets/images/btnCheck.svg";
import btnEdit from "../assets/images/btnEdit.svg";
import btnBin from "../assets/images/btnBin.svg";
import ButtonClose from "../components/ButtonClose.jsx";
import ButtonCrud from "../components/ButtonCrud.jsx";

export default function OptionsCrudView({ id, isOpen, handleToggle, doneTask, editTask, deleteTask }) {
    
    const [updateSelect, setUpdateSelect] = useState(false);
    const handleToggleUpdateSelect = () => setUpdateSelect(prev => !prev);
    const handleClose = (e) => e && handleToggle(!isOpen);

    return (
        <ul className={ styles.optionsCrudView }>
            <div>
                <ButtonClose img={ btnClose } text="Close" handleClose={ handleClose } />
            </div>
            <div>
                {
                    updateSelect === true
                        ? (
                            <>
                                <ButtonCrud handleClick={ () => doneTask(id) } img={ btnSave } option="save" />
                                <ButtonCrud handleClick={ () => editTask(id) } img={ btnBack } option="cancel" />
                            </>
                        ) : (
                            <>
                                <ButtonCrud handleClick={ () => doneTask(id) } img={ btnCheck } option="validate" />
                                <ButtonCrud handleClick={ () => { editTask(id); handleToggleUpdateSelect() }} img={ btnEdit } option="update" />
                                <ButtonCrud handleClick={ () => deleteTask(id) } img={ btnBin } option="delete" /> 
                            </>
                        )
                }
            </div>
        </ul>
    );
};