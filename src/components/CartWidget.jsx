import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cartNumber } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/cart">
            Carrito
            <span className="numerito">{cartNumber()}</span>
        </Link>
    </div>
  )
}

export default CartWidget