import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState("true");
    const {categoriaId} = useParams()

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = collection(db, "componentes")

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setItems(docs)
            setLoading(false)
        })


    }, [])

    const filtrado = items.filter((item) => item.categoria === categoriaId);


    if (loading === true) {
        return <Loader />
    } else {
        return (

            <>

                {categoriaId ? <ItemList items={filtrado} /> : <ItemList items={items} />}

            </>

        )
    }
}


export default ItemListContainer
