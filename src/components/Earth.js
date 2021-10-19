import {
    Link
  } from "react-router-dom";

const Earth = (props) => {

    let iframe;
    switch(props.planet.englishName){
        case "Mercury":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2369";
            break;
        case "Venus":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2342";
            break;
        case "Earth":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2393";
            break;
        case "Mars":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2372";
            break;
        case "Jupiter":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2375";
            break;
        case "Saturn":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2355";
            break;
        case "Uranus":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2344";
            break;
        case "Neptune":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2364";
            break;
        case "Sun":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2352";
            break;
        default:
            iframe = "No 3D Available";
            break;
    }


    return(
        <div className="threeD">
            <div className="blurb">
                <Link to="/"> <h1>The Planet {props.planet.englishName}</h1></Link>
                <p>aphelion: {props.planet.aphelion}</p> 
                <p>argPeriapsis: {props.planet.argPeriapsis}</p>
                <p>avgTemp: {props.planet.avgTemp}</p>
                <p>axialTilt: {props.planet.axialTilt}</p> 
                <p>density: {props.planet.density}</p> 
                <p>eccentricity: {props.planet.eccentricity}</p>
                <p>englishName: {props.planet.englishName}</p>
                <p>equaRadius: {props.planet.equaRadius}</p>
                <p>escape: {props.planet.escape}</p> 
                <p>flattening: {props.planet.flattening}</p> 
                <p>gravity:  {props.planet.gravity}</p>
                <p>inclination: {props.planet.inclination}</p> 
                <p>longAscNode:  {props.planet.longAscNode}</p>
                <p>mainAnomaly: {props.planet.mainAnomaly}</p>
            </div>
        
         <iframe title="earth" src={iframe} width='100%' height='450px' frameBorder='0' />
        </div>
    )
}

export default Earth;