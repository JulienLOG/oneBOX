import styles from "../assets/styles/components/buttonOpenOption.module.scss";

export default function ButtonOpenOption({ isOpen, handleToggle }) {
    
    const handleClick = (e) => {
        e && handleToggle(!isOpen)
    }

    return (
        <div className={`${ styles.buttonOpenOption } ${ isOpen && styles.buttonOpenOption__isOpen }`} onClick={ handleClick }>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};