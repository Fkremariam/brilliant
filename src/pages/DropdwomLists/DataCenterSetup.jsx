import React from "react";
import "./styleForDropContent.css"
import DataCenter from "../../asset/Services/DataCenter.jpg"
function DataCenterSetup() {
  return (
    <div><div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Data Center Setup</h1>

      </div >
      <div className="forAllService">
          <p className="about_us" style={{fontSize:"25px"}}>We understand the significance of data center technology for organizations, as it serves as a crucial investment housing essential network systems vital for daily operations. Our specialized expertise lies in the maintenance of data center servers and storage devices.</p>
          <img className="sideImage" src={DataCenter} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default DataCenterSetup;