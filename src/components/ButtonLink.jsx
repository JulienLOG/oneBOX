import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonLink.module.scss";

export default function ButtonLink({ path, text, children }) {

    return (
        <NavLink className={ styles.buttonLink } to={ path }>
            { text }{ children }
        </NavLink>
    );
};