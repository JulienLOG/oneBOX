import styles from "../assets/styles/components/buttonKbd.module.scss";

export default function ButtonKbd({ text }) {

    return (
        <kbd className={ styles.buttonKbd }>
            <kbd>⌘</kbd>
            <kbd>{ text }</kbd>
        </kbd>
    );
};