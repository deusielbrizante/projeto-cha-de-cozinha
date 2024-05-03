import styles from "./PopUpSuccess.module.css"
import Image from "next/image"
import casal from "../../../assets/img/casal.png"

export default function PopUpSuccess({ setConfirm, setSuccess }) {
    setConfirm(false)

    return (
        <div className={styles.popUp}>
            <div className={styles.heart}>
                <h2>Obrigado pela ajuda!</h2>
                <Image src={casal}></Image>
                <div className={styles.botoes}>
                    <button onClick={() => setSuccess(false)}>Continuar</button>
                </div>
            </div>
        </div >
    )
}