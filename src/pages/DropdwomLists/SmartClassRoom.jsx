import React from "react";
import "./styleForDropContent.css"
import smartC from "../../asset/Services/smartC.jpg"
function SmartClassRoom() {
  return (
    <div><div>
            <h1 style={{textAlign:'center',color:'white',backgroundColor:' rgb(67, 36, 150)',padding:'10rem'}}>Smart Class Room </h1>
</div >
      <div className="forAllService">
      
      <p className="about_us" style={{fontSize:"25px"}}>We enhance traditional classrooms with technology to improve teaching and learning. Our smart classrooms are equipped with a variety of essential technology tools.</p>
          <img className="sideImage" src={smartC} style={{alignItems:"center", paddingRight:"30rem",overflow:"hidden"}}/>

    </div>
    </div>
  );
}

export default SmartClassRoom;