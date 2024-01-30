import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  const mostrarMensaje = () => {
    toast.success(`Agregaste ${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'} al carrito`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="item-count">
        <button className='btn btn-success' onClick={handleSumar}>+</button>
        <p className='mt-2'>Cantidad: {cantidad}</p>
        <button className='btn btn-danger' onClick={handleRestar}>-</button>
      </div>
      <button className="btn btn-primary mt-3 mb-3" onClick={() => { handleAgregar(); mostrarMensaje(); }}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;