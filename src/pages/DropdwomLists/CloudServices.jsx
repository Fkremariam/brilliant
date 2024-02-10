import React from "react";
import "./styleForDropContent.css"
import cloudS from "../../asset/Services/cloudS.jpg"
function CloudServices() {
  return (
    <div>
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Cloud Services </h1>
      </div>
      <div className="forAllService">
      
      <p className="about_us" style={{fontSize:"25px"}}>We offer comprehensive cloud services, including cloud computing, storage, and backup solutions. Our services enable businesses to securely store and access data and applications over the internet.</p>
      <img className="sideImage" src={cloudS} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default CloudServices;