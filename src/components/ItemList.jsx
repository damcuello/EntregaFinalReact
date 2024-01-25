import Item from "./Item";
import { Container } from "@chakra-ui/react";


const ItemList = ({ items}) => {
  return (
    <div>
      <Container className="catalogo">
        {items?.map((item) => (
          <Item
          key={item.id}
          id={item.id}
          categoria={item.categoria}
          descripcion={item.descripcion}
          imagen={item.imagen}
          nombre={item.nombre}
          stock={item.stock}
          precio={item.precio}
          item={item}
          />
        ))}
      </Container>
    </div>
  );
};

export default ItemList