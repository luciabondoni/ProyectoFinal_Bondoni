import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext (CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, nombre, precio};
        agregarProducto (item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <h3> {descripcion} </h3>
            <img src={img} alt={nombre} />
            <button>
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
            </button>
        </div>
    )
}

export default ItemDetail