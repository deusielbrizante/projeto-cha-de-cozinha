import styles from "./Palette.module.css"

export default function Palette() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Paleta de cores<br/>para os utensílios</h1>
            </div>
            <div className={styles.colors}>
                <div className={`${styles.circles} ${styles.black}`}></div>
                <div className={`${styles.circles} ${styles.dark_gray}`}></div>
                <div className={`${styles.circles} ${styles.light_gray}`}></div>
            </div>
        </div>
    )
}