import styles from "../assets/styles/components/buttonCrud.module.scss";

export default function ButtonCrud({ option }) {

    return (
        <li className={ styles.buttonCrud }>   
            <span>puce</span> 
            <button>{ option }</button>
        </li>
    );
};