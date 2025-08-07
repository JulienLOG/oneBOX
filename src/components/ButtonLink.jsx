import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonLink.module.scss";

export default function ButtonLink({ path, text }) {

    return (
        <NavLink className={ ({ isActive }) => isActive ? `${styles.buttonLink} ${styles.buttonLink__active}` : styles.buttonLink } to={ path }>{ text }</NavLink>
    );
};