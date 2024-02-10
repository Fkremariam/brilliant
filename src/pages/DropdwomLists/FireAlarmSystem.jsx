import React from "react";
import "./styleForDropContent.css"
import HomeSc from "../../asset/Services/HomeSc.jpg"
function FireAlarmSystem() {
  return (
    <div><div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Fire Alarm System</h1>
</div >
      <div className="forAllService">
      <p className="about_us" style={{fontSize:"25px"}}>Ensuring safety and compliance with fire codes is a legal requirement, yet not everyone takes adequate precautions for personal safety. At our company, we are committed to addressing this concern by providing certified experts who can assess and enhance your fire-safety systems to meet required standards.</p>
       <img className="sideImage" src={HomeSc} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>
    </div>
    </div>
  );
}

export default FireAlarmSystem;