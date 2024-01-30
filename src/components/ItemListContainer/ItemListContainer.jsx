import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    setLoading(true);

    setTimeout(() => {

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);

  }, [categoria])


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (

        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};

export default ItemListContainer