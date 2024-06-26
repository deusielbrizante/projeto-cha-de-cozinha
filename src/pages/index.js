import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Palette from "../components/Palette";
import Card from "../components/Card";
import { getAllDatabase } from "../data/firebase";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import PopUp from "../components/PopUp";
import PopUpSuccess from "../components/PopUpSuccess";

export default function Home() {
  const [items, setItems] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [phone, setPhone] = useState("")
  const [invalidPhone, setInvalidPhone] = useState(false)
  const [itemId, setItemId] = useState("")
  const [update, setUpdate] = useState(true)
  const [success, setSuccess] = useState(false)
  const [maxItems, setMaxItems] = useState(false)

  useEffect(() => {
    if (update) {
      const getItems = async () => {
        const item = await getAllDatabase()
        setItems(item)
        setUpdate(false)
      }

      getItems()

      if (items.length > 0) {
        setUpdate(false)
      }
    }
  }, [update])

  return (
    <div className={styles.global}>
      <Head>
        <title>Chá de Cozinha</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Header />
          <Palette />
          <div className={styles.cards}>
            {items.length > 0 && (
              items.map((item) => (
                <Card key={item.idItem} name={item.nome} image={products[item.idItem - 1].image} description={products[item.idItem - 1].description}
                  link={item.link} price={item.preco.toFixed(2)} avaliable={item.disponivel} id={item.id} setConfirm={setConfirm} setItemId={setItemId} />
              ))
            )}
          </div>
        </div>
      </main>
      {confirm && <PopUp phone={phone} setPhone={setPhone} setConfirm={setConfirm} setInvalidPhone={setInvalidPhone} invalidPhone={invalidPhone} itemId={itemId} setUpdate={setUpdate} setSuccess={setSuccess} maxItems={maxItems} setMaxItems={setMaxItems} />}
      {success && <PopUpSuccess setConfirm={setConfirm} setSuccess={setSuccess} />}
    </div>
  );
}
