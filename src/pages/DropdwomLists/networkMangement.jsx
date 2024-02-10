import React from "react";
import "./styleForDropContent.css"
import netMan from "../../asset/Services/netMan.jpg"
function networkMangement() {
  return (
    <div><div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Network Mangement</h1>
</div >
      <div className="forAllService">
      
      <p className="about_us" style={{fontSize:"25px"}}>We specialize in network maintenance to prevent costly downtime and maximize business productivity. Trust us to handle all your preventive and corrective measures efficiently.</p>
      <img className="sideImage" src={netMan} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default networkMangement;