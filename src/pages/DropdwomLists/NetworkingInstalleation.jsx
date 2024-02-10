import React from "react";
import "./style.css"
import netINsta from "../../asset/Services/networkIn.jpg"

function NetworkingInstallleation() {
  return (
    <div>
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Networking Installeation</h1>
      </div>
       <div className="forAllService">
            <p className="about_us" style={{fontSize:"20px"}}>Our specialization lies in the installation, configuration, and cabling of network devices such as routers, switches, and firewalls. We excel at efficiently connecting devices to the network, guaranteeing seamless connectivity.</p>
            <img className="sideImage" src={netINsta} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>
      </div>
    </div>
  );
}

export default NetworkingInstallleation;