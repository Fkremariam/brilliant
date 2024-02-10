import React from "react";
import "./styleForDropContent.css"
import securityS from "../../asset/Services/securityS.jpg"
function SecuritySolutions() {
  return (
    <div>
      <div>
      <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Security Solutions</h1>
      </div >
      <div className="forAllService">
      
      <p className="about_us" style={{fontSize:"25px"}}>We specialize in network security, safeguarding networks from unauthorized access and malicious attacks. Our services include implementing firewalls, intrusion detection systems, and virus protection. Additionally, we conduct security assessments to identify network vulnerabilities and provide recommended remediation measures.</p>
      <img className="sideImage" src={securityS} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default SecuritySolutions;