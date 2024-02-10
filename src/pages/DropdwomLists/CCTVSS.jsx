import React from "react";
import "./styleForDropContent.css"
import cctv from "../../asset/Services/cctv.jpg"
function CCTV() {
  return (
    <div>
      <div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>CCTVSS</h1>
</div>
      <div className="forAllService">
      <p className="about_us" style={{fontSize:"25px"}}>With our Closed Circuit Television (CCTV) services, we offer a direct and closed system for video transmission. Our solution ensures that all components, including cameras, display monitors, and recording devices, are directly connected. This provides a secure and controlled environment, distinct from broadcast television.</p>
            <img className="sideImage" src={cctv} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>
    </div>
    </div>
  );
}

export default CCTV;