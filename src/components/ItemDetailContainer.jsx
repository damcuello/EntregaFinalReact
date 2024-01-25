import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'
import Loader from './Loader';


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "componentes", `${id}`);
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProduct(doc)
                setLoading(false)
            }
        })
    }, [])

    if (loading === true) {
        return <Loader />
    } else {
        return (
            <div>
                {product && <ItemDetail item={item} />}
            </div>
        )
    }



}


export default ItemDetailContainer