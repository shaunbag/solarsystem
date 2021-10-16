import './App.css';
import EarthImg from './img/earth.png';
import MercuryImg from './img/mercury.png';
import VenusImg from './img/venus.png';
import MarsImg from './img/mars.png';
import JupiterImg from './img/jupiter.png';
import SaturnImg from './img/saturn.png';
import UranusImg from './img/uranus.png';
import NeptuneImg from './img/neptune.png';
import SunImg from './img/sun.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Earth from './components/Earth';
import Venus from './components/Venus';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';
import Sun from './components/Sun';

function App() {


  return (
    <Router>
    <div className="App">
      <Link to="/"><h1 className="title">Our Solar System</h1></Link>
      <div className="planets">
        <Link to="/sun" ><img src={SunImg} alt="No Img" height="300px"></img></Link>
        <Link to="/mercury" ><img src={MercuryImg} alt="No img" height="50px"></img></Link>
        <Link to="/venus" ><img src={VenusImg} alt="No img" height="100px"></img></Link>
        <Link to="/earth" ><img src={EarthImg} alt="No img" height="100px"></img></Link>
        <Link to="/mars" ><img src={MarsImg} alt="No img" height="150px"></img></Link>
        <Link to="/jupiter" ><img src={JupiterImg} alt="No img" height="200px"></img></Link>
        <Link to="/saturn" ><img src={SaturnImg} alt="No img" height="175px"></img></Link>
        <Link to="/uranus" ><img src={UranusImg} alt="No img" height="150px"></img></Link>
        <Link to="/neptune" ><img src={NeptuneImg} alt="No img" height="200px"></img></Link>
      </div>
    

        <Switch>
          <Route exact path="/">
          </Route>  
          <Route path='/sun'>
            <Sun />
          </Route>
          <Route path='/mercury'>
            <Mercury />
          </Route>
          <Route path='/venus'>
            <Venus />
          </Route>
          <Route path='/earth'>
            <Earth />
          </Route>
          <Route path='/mars'>
            <Mars />
          </Route>
          <Route path='/jupiter'>
            <Jupiter />
          </Route>
          <Route path='/saturn'>
            <Saturn />
          </Route>
          <Route path='/uranus'>
            <Uranus />
          </Route>
          <Route path='/neptune'>
            <Neptune />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
