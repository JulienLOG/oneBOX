import styles from "../assets/styles/components/buttonClose.module.scss";

export default function ButtonClose({ img, text, handleClose }) {

    return (
        <button className={ styles.buttonClose } onClick={ handleClose }>
            <img src={ img } alt={`${ text } menu !`} />
            { text }
        </button>
    );
};