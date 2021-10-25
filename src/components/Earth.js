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
            <Link to="/"><h1 className="title">{props.planet.englishName}</h1></Link>
                <div className="info">
                    <div>
                        <p>
                        Earth is the third planet from the Sun and the only astronomical object known to harbour and support life.
                         About 29.2% of Earth's surface is land consisting of continents and islands. 
                         The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, 
                         but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. 
                         Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic 
                         plates that migrate across the surface over many millions of years, while its interior remains active 
                         with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, 
                         and a convective mantle that drives plate tectonics.
                        </p>
                    </div>
                    <div>
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
                </div>
            </div>
        
         <iframe title="earth" src={iframe} width='100%' height='450px' frameBorder='0' />
        </div>
        
    )
}

export default Earth;