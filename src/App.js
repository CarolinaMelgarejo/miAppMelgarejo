
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Button from './Components/Button/Button.js';
import ItemCount from './Components/ItemCount/ItemCount.js';
import Item from './Components/Item/Item';

const App = () => {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src="logoM.png" className="App-logo" alt="logoM" />
      </header>


      <ItemCount inicial={1} max={5} />

      <Item />
      

  
      
    </div>

  );
}

export default App;
