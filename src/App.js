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
import PlanetData from './utils/planets.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Our Planetary Bodies",
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
      mainAnomaly: 0,
      data: ""
    };

    this.planetSearch = this.planetSearch.bind(this);
    this.titleUpdate = this.titleUpdate.bind(this);
    this.handleReturnTitle = this.handleReturnTitle.bind(this);
  }

handleReturnTitle(){
  this.setState({
    title: "Our Planetary Bodies"
  })
}

titleUpdate(e){
  let planet = e.currentTarget.getAttribute('Value');
    this.setState({
      title: planet
    })
  }

planetSearch(e){
    let planet = e.currentTarget.getAttribute('Value');
    let descriptions = PlanetData;

    for(let i=0; i < descriptions.length; i++){
      console.log(descriptions[i])
      if(descriptions["planets"][i].name === planet){
        
        this.setState({
          data: descriptions["planets"][i]["DescriptionWiki"]
        })
      }
    }
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
      <Link to="/"><h1 className="title">Our <span className="blue">Solar System</span></h1></Link>
      <div className="planets">
        <h3 className="title">{this.state.title}</h3>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Sun"><img src={SunImg} alt="No Img" height="300px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Mercury"><img src={MercuryImg} alt="No img" height="50px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Venus"><img src={VenusImg} alt="No img" height="100px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Earth"><img src={EarthImg} alt="No img" height="100px" ></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Mars"><img src={MarsImg} alt="No img" height="150px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Jupiter"><img src={JupiterImg} alt="No img" height="200px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Saturn"><img src={SaturnImg} alt="No img" height="175px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Uranus"><img src={UranusImg} alt="No img" height="150px"></img></Link>
        <Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value="Neptune"><img src={NeptuneImg} alt="No img" height="200px"></img></Link>
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
