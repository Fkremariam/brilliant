import React from "react";
import "./styleForDropContent.css"
import visual from "../../asset/Services/audioV.jpg"
import "./style.css"
function AudioViusal() {
  return (
    <div>
      
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}> Audio / Viusal</h1></div>
    <div className="forAllService">
      <p className="about_us" style={{fontSize:"25px"}}>As an Audio Visual systems integrator and service provider, we specialize in delivering design, installation, and service solutions that enable enhanced communications for organizations.</p>
        <img className="sideImage" src={visual} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>
      </div>
    </div>
  );
}

export default AudioViusal;