import styles from "../assets/styles/components/buttonCrud.module.scss";

export default function ButtonCrud({ option, handleClick }) {

    return (
        <li className={ styles.buttonCrud }>   
            <span>puce</span> 
            <button name={ option } onClick={ handleClick }>{ option }</button>
        </li>
    );
};