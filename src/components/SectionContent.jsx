import styles from "../assets/styles/components/sectionContent.module.scss";

export default function SectionContent({ title, text }) {

    return (
        <section className={ styles.sectionContent }>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </section>
    );
};