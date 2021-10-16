import {
    Link
  } from "react-router-dom";

function Mercury() {
    return(
        
        <div className="threeD">
            <div className="blurb">
                <Link to="/"> <h1>The Planet Mercury</h1></Link>
                <p>Mer cury is the planet which is closest to the sun</p>
            </div>
         <iframe title="mercury" src='https://solarsystem.nasa.gov/gltf_embed/2369' width='100%' height='450px' frameBorder='0' />
        </div>
    )
}

export default Mercury;