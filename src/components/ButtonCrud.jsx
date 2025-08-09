import styles from "../assets/styles/components/buttonCrud.module.scss";

export default function ButtonCrud({ option }) {

    return (
        <li className={ styles.buttonCrud }>    
            <button>{ option }</button>
        </li>
    );
};