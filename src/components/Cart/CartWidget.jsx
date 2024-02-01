import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
  const { cantidadCarrito } = useContext(CartContext);

  return (
    <div className='carrito-container'>
      <Link className="menu-link" to="/cart">
        <div className='carrito'>
          <FaCartPlus />
          <span className="numerito">{cantidadCarrito()}</span>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;