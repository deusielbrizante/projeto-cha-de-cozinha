import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h2>Graziele<br />&<br />Deusiel</h2>
            </div>
            <div className={styles.title}>
                <h1>Chá de Panela</h1>
                <p>09 de junho de 2024 às 14h</p>
                <p>Rua José Salvi, 380 - Diva Sarcinelli</p>
            </div>
        </div>
    )
}