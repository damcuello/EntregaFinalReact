import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, disminuirCantidad, aumentarCantidad } = useContext(CartContext);
  
    const handleVaciar = () => {
      vaciarCarrito();
    }
  
    const handleAumentarCantidad = (producto) => {
      aumentarCantidad(producto.id);
      mostrarNotificacion('+');
    };
  
    const handleDisminuirCantidad = (producto) => {
      disminuirCantidad(producto.id);
      mostrarNotificacion('-');
    };
  

    const mostrarNotificacion = (accion) => {
        toast.info(`Modificaste la cantidad de unidades`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    };



    return (
      <div className='container'>
        <h1 className='mt-3 mb-4'>Carrito</h1>
  
        {carrito.map((prod) => (
          <div key={prod.id} className='card mb-3'>
            <div className='row g-0'>
              <div className='col-md-3'>
                <img src={prod.imagen} alt={prod.nombre} className='img-fluid' />
              </div>
              <div className='col-md-9'>
                <div className='card-body'>
                  <h5 className='card-title'>{prod.nombre}</h5>
                  <p className='card-text'>Precio unitario: ${prod.precio}</p>
                  <p className='card-text'>Cantidad: {prod.cantidad}</p>
                  <p className='card-text'>Precio total: ${prod.precio * prod.cantidad}</p>
                  <div className='btn-group'>
                    <button onClick={() => handleAumentarCantidad(prod)} className='btn btn-success me-2'>
                      +
                    </button>
                    <button onClick={() => handleDisminuirCantidad(prod)} className='btn btn-warning'>
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
  
        {carrito.length > 0 ? (
          <div>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar} className='btn btn-danger me-2'>
              Vaciar Carrito
            </button>
            <Link to='/checkout' className='btn btn-primary'>
              Finalizar Compra
            </Link>
          </div>
        ) : (
          <h2>No hay productos en el carrito</h2>
        )}
      </div>
    )
  }
  
  export default Carrito