import styles from "../assets/styles/components/buttonCrud.module.scss";

export default function ButtonCrud({ option, children, handleClick }) {

    return (
        <div className={ styles.buttonCrud }>
            <button onClick={ handleClick }>   
                <span>puce</span> 
                { option }
            </button>
            { children }
        </div>
    );
};