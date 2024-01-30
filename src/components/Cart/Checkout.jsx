import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1>Muchas gracias por su compra!</h1>
                <p>Tú número de pedido es: {pedidoId}</p>
            </div>
        )
    }
    return (
        <div className='container mt-3'>
            <h1>Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" className='mt-3' {...register("nombre")} />
                <br />
                <input type="email" placeholder="Ingresá tu e-mail" className='mt-3' {...register("email")} />
                <br />
                <input type="phone" placeholder="Ingresá tu teléfono" className='mt-3' {...register("telefono")} />
                <br />

                <button className="enviar btn btn-success mt-3" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout