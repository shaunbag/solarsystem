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
import Earth from './components/Earth';
import Search from './components/SearchApi';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      planet: "",
      aphelion: 0,
      argPeriapsis: 0,
      avgTemp: 0,
      axialTilt: 0,
      density: 0,
      eccentricity: 0,
      englishName: "",
      equaRadius: 0,
      escape: 0,
      flattening: 0,
      gravity: 0,
      id: "",
      inclination: 0,
      longAscNode: 0,
      mainAnomaly: 0
      
    };
    this.planetSearch = this.planetSearch.bind(this);
  }


planetSearch(e){
    let planet = e.currentTarget.getAttribute('Value');
    Search.search(planet).then(planet => {
      this.setState({
        aphelion: planet.aphelion,
        argPeriapsis: planet.argPeriapsis ,
        avgTemp: planet.avgTemp ,
        axialTilt: planet.axialTilt,
        density: planet.density,
        eccentricity: planet.eccentricity,
        englishName: planet.englishName,
        equaRadius: planet.equaRadius,
        escape: planet.escape,
        flattening: planet.flattening,
        gravity: planet.gravity,
        inclination: planet.inclination,
        longAscNode: planet.longAscNode,
        mainAnomaly: planet.mainAnomaly
      })
    })
  }


 render(){
   return (
    <Router>
    <div className="App">
      <Link to="/"><h1 className="title">Our Solar System</h1></Link>
      <div className="planets">
        <Link to="/planet" onClick={this.planetSearch} value="Sun"><img src={SunImg} alt="No Img" height="300px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Mercury"><img src={MercuryImg} alt="No img" height="50px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Venus"><img src={VenusImg} alt="No img" height="100px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Earth"><img src={EarthImg} alt="No img" height="100px" ></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Mars"><img src={MarsImg} alt="No img" height="150px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Jupiter"><img src={JupiterImg} alt="No img" height="200px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Saturn"><img src={SaturnImg} alt="No img" height="175px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Uranus"><img src={UranusImg} alt="No img" height="150px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} value="Neptune"><img src={NeptuneImg} alt="No img" height="200px"></img></Link>
      </div>
    

        <Switch>
          <Route exact path="/">
          </Route>
          <Route path='/planet'>
            <Earth planet={this.state}/>
          </Route>
        </Switch>
      
    </div>
    </Router>
   )}
}

export default App;
