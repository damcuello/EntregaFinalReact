import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    // const[count, setCount] = useState(0)

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaElProducto = nuevoCarrito.find(producto => producto.id === itemAgregado.id);

        if (estaElProducto) {
            estaElProducto.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const aumentarCantidad = (itemId) => {
        const nuevoCarrito = carrito.map(producto => {
            if (producto.id === itemId) {
                return { ...producto, cantidad: producto.cantidad + 1 };
            }
            return producto;
        });
        setCarrito(nuevoCarrito);
    }

    const disminuirCantidad = (itemId) => {
        const nuevoCarrito = carrito.map(producto => {
            if (producto.id === itemId && producto.cantidad > 1) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
            return producto;
        });
        setCarrito(nuevoCarrito);
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadCarrito,
            precioTotal,
            vaciarCarrito,
            disminuirCantidad,
            aumentarCantidad
        }}>
            {children}
        </CartContext.Provider>
    )


}