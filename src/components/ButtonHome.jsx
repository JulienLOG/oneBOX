import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonHome.module.scss";

export default function ButtonHome({ path, title, author, children }) {

    return (
        <div className={ styles.buttonHome }>
            <h1>{ title }</h1>
            <p>{ author }</p>
            <NavLink to={ path } aria-label={ `Go to ${title}` }>Back home</NavLink>
            { children }
        </div>
    );
};