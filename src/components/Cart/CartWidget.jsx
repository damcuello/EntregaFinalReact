import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { FaCartPlus } from "react-icons/fa";
const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/cart">
        <FaCartPlus />
            <span className="numerito">{cantidadCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget