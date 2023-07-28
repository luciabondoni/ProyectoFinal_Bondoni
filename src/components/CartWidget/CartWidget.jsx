import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png"

    return (
        <div>
            <Link to="/cart">
                <img className='carrito' src={imgCarrito} alt="Carrito de Compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget