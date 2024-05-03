import { getAllDatabase, updateDatabase } from "../../data/firebase";
import styles from "./PopUp.module.css"

export default function PopUp({ phone, setPhone, setConfirm, invalidPhone, setInvalidPhone, itemId, setUpdate, setSuccess, maxItems, setMaxItems }) {
    let quantidadeitens = 0

    const confirmOrder = async (telefone) => {
        var numeroLimpo = telefone.replace(/\D/g, '');
        if (numeroLimpo[2] === '9' && numeroLimpo.length === 11) {
            const items = await getAllDatabase()

            items.map((item) => {
                if (item.telefone == telefone) {
                    quantidadeitens++
                }
            })

            if (quantidadeitens < 3) {
                await updateDatabase(telefone, itemId)
                setSuccess(true)
            } else {
                setMaxItems(true)
            }

            console.log(quantidadeitens)
            console.log(itemId)
            setUpdate(true)
        } else {
            setInvalidPhone(true)
        }
    }

    return (
        <div className={styles.popUp}>
            <div className={styles.insercao}>
                <label htmlFor="telefone"><h1>Para confirmar, digite abaixo seu número de Telefone!</h1></label>
                <input type="tel" placeholder="(xx) xxxxx-xxxx" value={phone} onChange={(event) => { setPhone(event.target.value); setInvalidPhone(false); setMaxItems(false) }} minLength={11} maxLength={11} id="telefone" />
                {invalidPhone && <p>Número de telefone inválido!</p>}
                {maxItems && <p>Quantidade máxima de itens escolhidos!</p>}
            </div>
            <div className={styles.botoes}>
                <button onClick={() => setConfirm(false)}>Voltar</button>
                <button onClick={() => confirmOrder(phone)}>Confirmar</button>
            </div>
        </div>
    )
}