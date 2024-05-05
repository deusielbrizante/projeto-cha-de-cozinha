import styles from "./PopUpSuccess.module.css"
import Image from "next/image"
import couple from "../../../assets/img/casal.png"

export default function PopUpSuccess({ setSuccess }) {
    return (
        <div className={styles.popUp}>
            <div className={styles.heart}>
                <h2>Obrigado pela ajuda!</h2>
                <Image src={couple} alt="casal"></Image>
                <div className={styles.buttons}>
                    <button onClick={() => setSuccess(false)}>Continuar</button>
                </div>
            </div>
        </div >
    )
}