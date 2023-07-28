import CartWidget from '../CartWidget/CartWidget'
import './Navegation.css'
import { Link, NavLink } from 'react-router-dom'

const Navegation = () => {
  return (
    <header>
      <Link to={"/"} >
        <h1>Tienda de Ropa</h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}>Remeras y Buzos</NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/3"}>Pantalones y Zapatillas</NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navegation