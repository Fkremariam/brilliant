import React from "react";
import "./styleForDropContent.css"
import fingurP from "../../asset/Services/fingurP.jpg"
function RFID() {
  return (
    <div>
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>RFID</h1>

    </div >
      <div className="forAllService">
      
      <p className="about_us" style={{fontSize:"25px"}}>Our next-generation Smart Devices in Biometrics for Access Control offer enhanced building security, internal communications, and employee management. They provide these benefits at a significantly reduced total cost of ownership compared to previous biometric systems for physical access control.</p>
      <img className="sideImage" src={fingurP} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default RFID;