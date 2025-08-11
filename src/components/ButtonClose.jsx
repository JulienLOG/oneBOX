import styles from "../assets/styles/components/buttonClose.module.scss";

export default function ButtonClose({ img, text }) {

    return (
        <button className={ styles.buttonClose }>
            <img src={ img } alt={`${ text } menu !`} />
            { text }
        </button>
    );
};