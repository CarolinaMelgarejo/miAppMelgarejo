
import './App.css';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Button from './Components/Button/Button.js';
import ItemCount from './Components/ItemCount/ItemCount.js';
import Item from './Components/Item/Item';
import Coleccion from './Components/Views/Coleccion';
import Contacto from './Components/Views/Contacto';
import Home from './Components/Views/Home';
import Products from './Components/Views/Products.js';
import Carrito from './Components/Views/Carrito';


const App = () => {
  
  
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/coleccion">
            <Coleccion />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
           <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/carrito">
            <Carrito />
            <ItemCount/>
          </Route>
        </Switch>
      </BrowserRouter> 
      
      
     

      </header>
      
    

    </div>

  );
}

export default App;
