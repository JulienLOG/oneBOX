import styles from "../assets/styles/views/optionsCrudView.module.scss";
import ButtonCrud from "../components/ButtonCrud.jsx";

export default function OptionsCrudView({ children }) {
    
    const options = ["validate", "update", "delete"];

    return (
        <ul className={ styles.optionsCrudView }>
            { options.map((itt) => <ButtonCrud key={itt} option={itt} />) }
        </ul>
    );
};