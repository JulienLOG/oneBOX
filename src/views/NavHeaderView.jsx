import styles from "../assets/styles/views/navHeaderView.module.scss";
import ButtonLink from '../components/ButtonLink.jsx';

export default function NavHeaderView() {
    const routes = ["See Tasks", "About", "My follow"];
    
    return (
        <nav className={ styles.navHeaderView }>
            { routes.map((itt, index) => <ButtonLink key={ index } id={ index } text={ itt }/>) }
        </nav>
    );
};