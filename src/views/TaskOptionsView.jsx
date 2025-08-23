import { useState } from "react";
import styles from "../assets/styles/views/taskOptionsView.module.scss";
import ButtonClose from "../components/ButtonClose.jsx";
import ButtonCrud from "../components/ButtonCrud.jsx";
import ButtonKbd from "../components/ButtonKbd.jsx";

export default function TaskOptionsView({ id, isOpen, handleToggle, doneTask, editTask, deleteTask }) {
    
    const [updateSelect, setUpdateSelect] = useState(false);
    const handleToggleUpdateSelect = () => setUpdateSelect(prev => !prev);
    const handleClose = (e) => e && handleToggle(!isOpen);

    return (
        <ul className={ styles.taskOptionsView }>
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
                                <ButtonCrud handleClick={ () => doneTask(id) } option="save">
                                    <ButtonKbd text="S" styleMode="white"/>
                                </ButtonCrud>
                                <ButtonCrud handleClick={ () => editTask(id) } option="cancel">
                                    <ButtonKbd text="C" styleMode="white"/>
                                </ButtonCrud>
                            </>
                        ) : (
                            <>
                                <ButtonCrud handleClick={ () => doneTask(id) } option="validate">
                                    <ButtonKbd text="V" styleMode="white"/>
                                </ButtonCrud>
                                <ButtonCrud handleClick={ () => { editTask(id); handleToggleUpdateSelect() }} option="update">
                                    <ButtonKbd text="U" styleMode="white"/>
                                </ButtonCrud>
                                <ButtonCrud handleClick={ () => deleteTask(id) } option="delete">
                                    <ButtonKbd text="D" styleMode="white"/>
                                </ButtonCrud> 
                            </>
                        )
                }
            </li>
        </ul>
    );
};