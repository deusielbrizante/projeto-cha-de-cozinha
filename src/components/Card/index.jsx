import styles from "./Card.module.css"
import Image from "next/image"

export default function Card({ name, link, price, avaliable, image, description, id, setItemId, setConfirm }) {
    const hasClicked = () => {
        setConfirm(true)
        setItemId(id)
    }

    return (
        <div className={styles.container}>
            {avaliable ? <div className={styles.avaliable}>disponível</div> : <div className={styles.indisponivel}>indisponível</div>}
            <Image src={image} alt={description} onClick={() => avaliable && hasClicked()}>
            </Image>
            {avaliable && <div className={styles.circle}>
                <span className={styles.click}>Clique aqui</span>
            </div>}
            <div className={styles.description}>
                <p onClick={() => avaliable && hasClicked()}>{name}</p>
                <p onClick={() => avaliable && hasClicked()}>R${price}</p>
                <a href={link} target="_blank">Ver referência</a>
            </div>
        </div>
    )
}