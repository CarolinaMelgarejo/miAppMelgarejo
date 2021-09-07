import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Button from './Components/Button/Button.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src="logo.svg" className="App-logo" alt="logoM" />
      </header>
    </div>
  );
}

export default App;
