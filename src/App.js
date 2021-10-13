import './App.css';
import Earth from './img/earth.png';
import Mercury from './img/mercury.png';
import Venus from './img/venus.png';
import Mars from './img/mars.png';
import Jupiter from './img/jupiter.png';
import Saturn from './img/saturn.png';
import Uranus from './img/uranus.png';
import Neptune from './img/neptune.png';
import Sun from './img/sun.png'

function App() {
  return (
    <div className="App">
      <div className="planets">
        <img src={Sun} alt="No Img" height="300px"></img>
        <img src={Mercury} alt="No img" height="50px"></img>
        <img src={Venus} alt="No img" height="100px"></img>
        <img src={Earth} alt="No img" height="100px"></img>
        <img src={Mars} alt="No img" height="150px"></img>
        <img src={Jupiter} alt="No img" height="200px"></img>
        <img src={Saturn} alt="No img" height="175px"></img>
        <img src={Uranus} alt="No img" height="150px"></img>
        <img src={Neptune} alt="No img" height="200px"></img>
      </div>
    </div>
  );
}

export default App;
