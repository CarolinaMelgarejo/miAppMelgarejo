import  './Navbar.css'


const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className= "leftNav">
                <button className="option">Home</button>
                <button className="option">Coleccion</button>
                <button className="option">Contacto</button>
            </div>
            <div className= "rigthNav"> 
                <button className="option">Carrito</button>
                <button className="option">Ingresar</button>
            </div>
        </nav>
    )
}

export default Navbar
