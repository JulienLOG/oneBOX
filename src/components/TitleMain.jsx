import styles from "../assets/styles/components/titleMain.module.scss";

export default function TitleMain({ title, author }) {

    return (
        <div className={ styles.titleMain }>
            <h1>{ title }</h1>
            <p>{ author }</p>
        </div>
    );
};