import styles from "../assets/styles/components/buttonLink.module.scss";

export default function ButtonLink({ id, text }) {

    return (
        <button className={ styles.buttonLink } id={ id }>{ text }</button>
    );
};