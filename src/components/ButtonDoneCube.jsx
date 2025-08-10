import styles from "../assets/styles/components/buttonDoneCube.module.scss";

export default function buttonDoneCube() {

    const positions = ["top", "bottom", "back", "front", "left", "right"];

    return (
        <div className={ styles.buttonDoneCube }>
            <div>
                { positions.map( position => <div key={ position } className={ styles[`buttonDoneCube--${ position }`] }></div>)}
            </div>
        </div>
    );
};