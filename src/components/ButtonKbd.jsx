import styles from "../assets/styles/components/buttonKbd.module.scss";

export default function ButtonKbd({ text, styleMode }) {

    return (
        <kbd className={`${ styles.buttonKbd } ${ styleMode === "white" ? styles.buttonKbdWhite : "" }`}>
            <kbd>⌘</kbd>
            <kbd>{ text }</kbd>
        </kbd>
    );
};