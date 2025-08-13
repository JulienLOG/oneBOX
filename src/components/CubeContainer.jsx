import styles from "../assets/styles/components/cubeContainer.module.scss";

export default function CubeContainer() {

   const positions = ["top", "bottom", "back", "front", "left", "right"];

    return (
        <div className={ styles.cubeContainer }>
            <div>
                { positions.map( position => <div key={ position } className={ styles[`cubeContainer--${ position }`] }></div>)}
            </div>
        </div>
    );
};