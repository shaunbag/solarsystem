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

  json = require('./utils/names_sizes.json')

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

  getImg(name){
    switch(name){
      case "Mercury":
        return MercuryImg
    case "Venus":
        return VenusImg
    case "Earth":
        return EarthImg
    case "Mars":
       return MarsImg
    case "Jupiter":
        return JupiterImg
    case "Saturn":
        return SaturnImg
    case "Uranus":
        return UranusImg
    case "Neptune":
       return NeptuneImg
    case "Sun":
        return SunImg
    default:
        return
    }
  }

 render(){
   return (
    <Router>
    <div className="App">
      <Link to="/"><h1 className="title">Our <span className="blue">Solar System</span></h1></Link>
      <div className="planets">
        <h3 className="title">{this.state.title}</h3>
        {
          this.json["data"].map((item) => {
            return<Link to="/planet" onClick={this.planetSearch} onMouseEnter={this.titleUpdate} onMouseLeave={this.handleReturnTitle} value={item.name}><img src={this.getImg(item.name)} alt="No Img" height={item.size}></img></Link>
          })
        }
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
