import styles from "../assets/styles/components/buttonCrud.module.scss";

export default function ButtonCrud({ img, option, handleClick }) {

    return (
        <button className={ styles.buttonCrud } onClick={ handleClick }>   
            <span>puce</span> 
            <img src={ img } alt={`${ option } task !`} />
            { option }
        </button>
    );
};