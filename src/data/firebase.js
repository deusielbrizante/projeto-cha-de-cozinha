// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDtud1kDerLkyLGA4-EoG3fA-uz4FLwGI0",
  authDomain: "casamento-001.firebaseapp.com",
  databaseURL: "https://casamento-001-default-rtdb.firebaseio.com",
  projectId: "casamento-001",
  storageBucket: "casamento-001.appspot.com",
  messagingSenderId: "920483406953",
  appId: "1:920483406953:web:c830b40ecb22ce1975aef8",
  measurementId: "G-3Y1Z9E4VHL"
});

const db = getFirestore(firebaseApp);
const useCollectionRef = collection(db, "casamento")

export const getAllDatabase = async () => {

  const data = await getDocs(useCollectionRef)

  return data.docs.map((document) => ({ ...document.data(), id: document.id }))
}

export async function updateDatabase(telefone, idItem) {
  const itemRef = await doc(db, "casamento", idItem)

  await updateDoc(itemRef, {
    telefone: telefone,
    disponivel: false
  })
}