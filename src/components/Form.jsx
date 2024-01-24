import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { OrderedList } from '@chakra-ui/react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))

    }
    const order = {

        cliente: {nombre, email},
        items: cart,
    }

    const ordersCollection = collection(db, "orden")




    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <input type="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email} />
                <button type="submit"> Enviar</button>


            </form>
            <p>{orderId}</p>
        </div>
    )
}

export default Form