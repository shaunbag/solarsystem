import './App.css';
import Earth from './img/earth.png';
import Mercuryimg from './img/mercury.png';
import Venus from './img/venus.png';
import Marsimg from './img/mars.png';
import Jupiter from './img/jupiter.png';
import Saturn from './img/saturn.png';
import Uranus from './img/uranus.png';
import Neptune from './img/neptune.png';
import Sunimg from './img/sun.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mars from './components/Mars';
import Mercury from './components/Mercury';

function App() {


  return (
    <Router>
    <div className="App">
      <h1 className="title">Our Solar System</h1>
      <div className="planets">
        <Link to="/" ><img src={Sunimg} alt="No Img" height="300px"></img></Link>
        <Link to="/mercury" ><img src={Mercuryimg} alt="No img" height="50px"></img></Link>
        <Link to="/venus" ><img src={Venus} alt="No img" height="100px"></img></Link>
        <Link to="/earth" ><img src={Earth} alt="No img" height="100px"></img></Link>
        <Link to="/mars" ><img src={Marsimg} alt="No img" height="150px"></img></Link>
        <Link to="/jupiter" ><img src={Jupiter} alt="No img" height="200px"></img></Link>
        <Link to="/saturn" ><img src={Saturn} alt="No img" height="175px"></img></Link>
        <Link to="/uranus" ><img src={Uranus} alt="No img" height="150px"></img></Link>
        <Link to="/neptune" ><img src={Neptune} alt="No img" height="200px"></img></Link>
      </div>
    

        <Switch>
          <Route exact path='/'>
            
          </Route>
          <Route path='/mercury'>
          <Mercury />
          </Route>
          <Route path='/venus'>
            
          </Route>
          <Route path='/earth'>
           
          </Route>
          <Route path='/mars'>
            <Mars />
          </Route>
          <Route path='/jupiter'>
            
          </Route>
          <Route path='/saturn'>
            
          </Route>
          <Route path='/uranus'>
            
          </Route>
          <Route path='/neptune'>
            
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
