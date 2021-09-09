import{ useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Button from './Components/Button/Button.js';

const App = () => {
  const [count, setCount] = useState(0)

  const restarCantidad = () => {
    if (count < 1) {
      console.log('nada')
    } else {
      setCount(count-1)
    }
  }

  const sumarCantidad = () => {
    if (count > 5){
      console.log('sin stock')
    } else {
      setCount(count+1)
    }
  }
  



  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src="logoM.png" className="App-logo" alt="logoM" />
      </header>

    <div className="body">

      <h3 className="subTitulo" >{count}</h3>
      <button onClick= {sumarCantidad}> + </button>
      <button onClick={ () =>  setCount (count)}> Cantidad </button>
      <button onClick= {restarCantidad}> - </button>
      {count > 6 ? <h4 className="subTitulo">Sin Stock</h4>:''}
     


    </div> 
    
      
    </div>

  );
}

export default App;
