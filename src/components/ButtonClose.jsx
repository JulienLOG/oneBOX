import styles from "../assets/styles/components/buttonClose.module.scss";

export default function ButtonClose({ text, handleClose, children }) {

    return (
        <button className={ styles.buttonClose } onClick={ handleClose }>
            { text }
            { children }
        </button>
    );
};