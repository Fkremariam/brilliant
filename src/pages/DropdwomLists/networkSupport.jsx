import React from "react";
import "./styleForDropContent.css"
import netSu from "../../asset/Services/networkSup.jpg"
function networkSupport() {
  return (
    <div>
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Network Support</h1>

      </div>
      <div className="forAllService">
        <p className="about_us">We provide comprehensive network support services, encompassing troubleshooting, software updates, and security patching. Our expertise ensures smooth network operations and enhanced security measures.</p>
        <img className="sideImage" src={netSu} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

      </div>
    </div>
  );
}

export default networkSupport;