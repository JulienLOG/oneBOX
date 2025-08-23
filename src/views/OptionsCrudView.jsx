import { useState } from "react";
import styles from "../assets/styles/views/optionsCrudView.module.scss";
import btnSave from "../assets/images/btnSave.svg";
import btnBack from "../assets/images/btnBack.svg";
import btnCheck from "../assets/images/btnCheck.svg";
import btnEdit from "../assets/images/btnEdit.svg";
import btnBin from "../assets/images/btnBin.svg";
import ButtonClose from "../components/ButtonClose.jsx";
import ButtonCrud from "../components/ButtonCrud.jsx";
import ButtonKbd from "../components/ButtonKbd.jsx";

export default function OptionsCrudView({ id, isOpen, handleToggle, doneTask, editTask, deleteTask }) {
    
    const [updateSelect, setUpdateSelect] = useState(false);
    const handleToggleUpdateSelect = () => setUpdateSelect(prev => !prev);
    const handleClose = (e) => e && handleToggle(!isOpen);

    return (
        <ul className={ styles.optionsCrudView }>
            <li>
                <ButtonClose text="Close" handleClose={ handleClose }>
                    <ButtonKbd text="Esc" styleMode="white" optionDisplay={false}/>
                </ButtonClose>
            </li>
            <li>
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
            </li>
        </ul>
    );
};