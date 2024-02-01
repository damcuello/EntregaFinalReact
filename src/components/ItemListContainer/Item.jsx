import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <Card className="h-100" style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={producto.imagen} className="card-img-top imagen-pers" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{producto.titulo}</Card.Title>
        <div className="flex-grow-1">
          <Card.Text>
            <div>
              <strong>Precio:</strong> ${producto.precio}
            </div>
            <div>
              <strong>Descripción:</strong> {producto.descripcion}
            </div>
          </Card.Text>
        </div>
        <Link className="btn btn-color mt-auto" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;