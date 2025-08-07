import styles from "../assets/styles/views/navHeaderView.module.scss";
import ButtonLink from '../components/ButtonLink.jsx';

export default function NavHeaderView() {
    const routes = ["tasks", "about", "follow"];

    return (
        <nav className={ styles.navHeaderView }>
            { routes.map((itt, index) => <ButtonLink key={ index } path={ itt } text={ itt }/>) }
        </nav>
    );
};