import styles from "../assets/styles/components/buttonKbd.module.scss";

export default function ButtonKbd({ text, styleMode, styleSize }) {

    return (
        <kbd className={`
            ${ styles.buttonKbd } 
            ${ styleMode === "white" ? styles.buttonKbd_white : "" }
            ${ styleSize === "small" ? styles.buttonKbd_small : "" }
            `}>
            <kbd>⌘</kbd>
            <kbd>{ text }</kbd>
        </kbd>
    );
};