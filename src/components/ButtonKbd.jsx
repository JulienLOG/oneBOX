import styles from "../assets/styles/components/buttonKbd.module.scss";

export default function ButtonKbd({ text, styleMode, optionDisplay = true }) {

    return (
        <kbd className={`
            ${ styles.buttonKbd } 
            ${ styleMode === "white" ? styles.buttonKbd_white : "" }
            `}>
            <kbd>{ optionDisplay ? "⌘" : "" }</kbd>
            <kbd>{ text }</kbd>
        </kbd>
    );
};