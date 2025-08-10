import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonLinkArrow.module.scss";

export default function ButtonLinkArrow({ path, img, text, position }) {

    const positionClass = styles[`buttonLinkArrow__position--${ position }`] ?? "";

    return (
        <NavLink to={ path } className={`${ styles.buttonLinkArrow } ${ positionClass}`}>
            <img src={ img } alt={ text } />
            <span>{ text }</span>
        </NavLink>
    );
};