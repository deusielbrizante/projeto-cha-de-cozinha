import styles from "./Card.module.css"
import Image from "next/image"

export default function Card({ name, link, price, avaliable, image, description, id, setItemId, setConfirm }) {
    const foiClicado = () => {
        setConfirm(true)
        setItemId(id)
    }

    return (
        <div className={styles.container}>
            {avaliable ? <div className={styles.avaliable}>disponível</div> : <div className={styles.indisponivel}>indisponível</div>}
            <Image src={image} alt={description} onClick={() => avaliable && foiClicado()}/>
            <div className={styles.description}>
                <p onClick={() => avaliable && foiClicado()}>{name}</p>
                <p onClick={() => avaliable && foiClicado()}>R${price}</p>
                <a href={link} target="_blank">Referência</a>
            </div>
        </div>
    )
}