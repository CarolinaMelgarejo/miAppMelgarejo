import  './Navbar.css'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (productos) => {
    return (
        <nav className = "Navbar">

            <div className= "leftNav">
            <Link to="/" activeClassName="navLink" className="option">
                <img src="logoM.png" className="App-logo" alt="logoM"></img> 
            </Link>
            <NavLink to="/coleccion" activeClassName="navLink" className="option" >
            Coleccion
            </NavLink>
            <NavLink to="/products" activeClassName="navLink" className="option" >
            Sillas
            </NavLink>
    
           
            <NavLink to="/contacto" activeClassName="navLink" className="option" >
            Contacto
            </NavLink>
           
            </div>


            <div className= "rigthNav"> 
            <Link to="/carrito" activeClassName="navLink" className="option">
                <img src="carrito.png" className="carrito" alt="carrito"></img> 
            </Link>
               
            </div>
        </nav>
    )
}

export default Navbar
