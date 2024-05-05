import { getAllDatabase, updateDatabase } from "../../data/firebase";
import styles from "./PopUp.module.css"

export default function PopUp({ phone, setPhone, setConfirm, invalidPhone, setInvalidPhone, itemId, setUpdate, setSuccess, maxItems, setMaxItems }) {
    let quantityItems = 0

    const confirmOrder = async (phoneNumber) => {
        var cleanNumber = phoneNumber.replace(/\D/g, '');
        if (cleanNumber[2] === '9' && cleanNumber.length === 11) {
            const items = await getAllDatabase()

            items.map((item) => {
                if (item.telefone == phoneNumber) {
                    quantityItems++
                }
            })

            if (quantityItems < 3) {
                await updateDatabase(phoneNumber, itemId)
                setSuccess(true)
            } else {
                setMaxItems(true)
            }

            setUpdate(true)
            setConfirm(false)
        } else {
            setInvalidPhone(true)
        }
    }

    return (
        <div className={styles.popUp}>
            <div className={styles.insertion}>
                <label htmlFor="phoneNumber"><h1>Para confirmar este item, digite<br /> abaixo seu número de Telefone!</h1></label>
                <input type="tel" placeholder="(xx) xxxxx-xxxx" value={phone} onChange={(event) => { setPhone(event.target.value); setInvalidPhone(false); setMaxItems(false) }} minLength={11} maxLength={11} id="phoneNumber" name="phoneNumber" />
                {invalidPhone && <p>Número de telefone inválido!</p>}
                {maxItems && <p>Quantidade máxima de itens escolhidos!</p>}
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setConfirm(false)}>Voltar</button>
                <button onClick={() => confirmOrder(phone)}>Confirmar</button>
            </div>
        </div>
    )
}