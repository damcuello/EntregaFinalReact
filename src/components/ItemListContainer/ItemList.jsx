import Item from "./Item";
import { mayus } from "../../auxiliar/mayus";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container" >
        <h2 className="titulo">{mayus(titulo)}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {productos.map((producto) => (
                    <div key={producto.id} className="col">
                        <Item producto={producto} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList