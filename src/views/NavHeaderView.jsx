import styles from "../assets/styles/views/navHeaderView.module.scss";
import ButtonLink from "../components/ButtonLink.jsx";
import ButtonKbd from "../components/ButtonKbd.jsx";

export default function NavHeaderView() {
    const routes = [
        { name: "tasks", touch: "T" }, 
        { name: "about", touch: "A" }, 
        { name: "follow", touch: "F" }
    ];

    return (
        <nav className={ styles.navHeaderView }>
            { routes.map((itt, index) => 
                <ButtonLink key={ index } path={ itt.name } text={ itt.name }>
                    <ButtonKbd text={ itt.touch } styleMode="white" />
                </ButtonLink>
            )}
        </nav>
    );
};