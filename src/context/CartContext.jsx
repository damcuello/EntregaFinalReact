import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const contadorDeCart = () => {
      return cart.reduce ((acc, item) => acc + item.contador, 0);
    }

    const precioTotalCarrito = () => {
      return cart.reduce ((acc, item) => acc + item.precio * item.contador, 0)
    }
    
    const vaciarCart = () => {
      setCart([])
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    }

    return(
        <CartContext.Provider value={{ cart, setCart, contadorDeCart, precioTotalCarrito, vaciarCart, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider