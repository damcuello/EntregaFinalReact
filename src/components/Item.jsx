import { Link } from "react-router-dom";
import { mayus } from "../auxiliar/mayus";

const Item = ({ producto }) => {

  return (
    <div className="producto-container">
      <h2 className="producto-titulo">{producto.titulo}</h2>
      <img className="producto-imagen" src={producto.imagen} alt={producto.titulo}/>
      <p className="producto-precio">${producto.precio}</p>
      <p>Categoría: {mayus(producto.categoria)}</p>
      <Link className="ver-mas" to={`/item/${producto.id}`}>
        Ver mas
      </Link>
    </div>
  );
};

export default Item;