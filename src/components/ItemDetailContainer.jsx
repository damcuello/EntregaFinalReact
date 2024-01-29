import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                );
            })

    }, [id])


    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <div className="error-container">
                    <h1 className="titulo-error">Error</h1>
                    <p>{error}</p>
                </div>
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;