import {
    Link
  } from "react-router-dom";


const Earth = (props) => {
    let iframe;
    let json = require('../utils/planets.json')
    let text;
    switch(props.planet.englishName){
        case "Mercury":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2369";
            text = json["planets"][2]["DescriptionWiki"]
            break;
        case "Venus":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2342";
            text = json["planets"][3]["DescriptionWiki"]
            break;
        case "Earth":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2393";
            text = json["planets"][0]["DescriptionWiki"]
            break;
        case "Mars":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2372";
            text = json["planets"][1]["DescriptionWiki"]
            break;
        case "Jupiter":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2375";
            text = json["planets"][4]["DescriptionWiki"]
            break;
        case "Saturn":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2355";
            text = json["planets"][5]["DescriptionWiki"]
            break;
        case "Uranus":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2344";
            text = json["planets"][6]["DescriptionWiki"]
            break;
        case "Neptune":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2364";
            text = json["planets"][8]["DescriptionWiki"]
            break;
        case "Sun":
            iframe = "https://solarsystem.nasa.gov/gltf_embed/2352";
            text = json["planets"][7]["DescriptionWiki"]
            break;
        default:
            iframe = "No 3D Available";
            text = "No text"
            break;
    }

    
    return(
        <div className="threeD">
            <div className="blurb">
            <Link to="/"><h1 className="title">{props.planet.englishName}</h1></Link>
                <div className="info">
                    <div>
                        <p>
                            {text}
                        </p>
                    </div>
                    <div className="facts">
                        <p>aphelion: {props.planet.aphelion}<br></br>
                        argPeriapsis: {props.planet.argPeriapsis}<br></br>
                        avgTemp: {props.planet.avgTemp}<br></br>
                        axialTilt: {props.planet.axialTilt}<br></br>
                        density: {props.planet.density}<br></br>
                        eccentricity: {props.planet.eccentricity}<br></br>
                        equaRadius: {props.planet.equaRadius}<br></br>
                        escape: {props.planet.escape}<br></br>
                        flattening: {props.planet.flattening}<br></br>
                        gravity:  {props.planet.gravity}<br></br>
                        inclination: {props.planet.inclination}<br></br>
                        longAscNode:  {props.planet.longAscNode}<br></br>
                        mainAnomaly: {props.planet.mainAnomaly}</p>
                    </div>
                    <div>
                        {props.planet.data}
                    </div>
                </div>
            </div>
        
         <iframe title="earth" src={iframe} width='100%' height='450px' frameBorder='0' />
        </div>
        
    )
}

export default Earth;