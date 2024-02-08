// SvgAnimation.js
import React, { useState, useEffect } from 'react';
import './SvgAnimation.css';
import Enterprise_Networking from '../asset/imk.jpg'
import product2 from '../asset/produ.jpg'
import produc3 from '../asset/produ3.jpg'
const SvgAnimation = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay the fade-in effect for the content after SVG animation
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
    <div className="svg-animation-container">
      <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>

      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Enterprise Networking</h2>
        <p> Products: Routers, Switches, SD-WAN, Indoor & Outdoor Access Points, WLAN Controllers</p>
        <span>Vendor:</span><p> Cisco, Huawei, Juniper, Barracuda, DELLEMC, and Extreme</p>
      </div>
      
    </div>
    <div className='svg-animation-container'> 
    

      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Network Security</h2>
        <p> 
Products: Firewalls, Secure Endpoint, Secure Email, ISE, Anti-Virus, WAF</p>
        <span>Vendor:</span><p> Cisco, Fortinet, , Kaspersky, Baraccuda</p>
      </div>
      <div className="svg-container">
        <div className="svg-item">
          <img src={product2}/>
        </div>
      </div>
      </div>
       <div className='svg-animation-container'> 
    <div className="svg-container">
        <div className="svg-item">
          <img src={produc3}/>
        </div>
      </div>

      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Modern Data Center and Cloud</h2>
        <p> Products: Routers, Switches, SD-WAN, Indoor & Outdoor Access Points, WLAN Controllers</p>
        <span>Vendor:</span><p> Cisco, Huawei, Juniper, Barracuda, DELLEMC, and Extreme</p>
      </div>
      </div>
       <div className='svg-animation-container'> 
      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Collaboration Solutions</h2>
        <p> Products: Conferencing, Contact Center, Phones, Headsets and room devices, Smart Class Rooms, Digital Signage</p>
        <span>Vendor:</span><p> Polycom, Cisco, Avaya, Microsoft, MaxHub, Q-NEX,Absen and BrightSign</p>
      </div>
      <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>
      </div>
        <div className='svg-animation-container'> 
        <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>
      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Data Center Facility</h2>
        <p style={{width:'45rem'}}> Products: Modular Data Centers, Data Center Infrastructure Management, Data Center Power Pack up Solutions, Data Center Security, NOC, Fire Suppression System, HVAC and Civil Works</p>
        <span>Vendor:</span><p> Huawei, IBM, Sunbird, Tripp Lite, Delta</p>
      </div>
      
      </div>
        <div className='svg-animation-container'> 
      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Physical Security</h2>
        <p style={{width:'45rem'}}> Products: Indoor and Outdoor CCTV Cameras, Gate Barrier, Parking Management, Access Control, X-Ray, Hand Held Metal Detectors, Luggage Scanners, Video Management System</p>
        <span>Vendor:</span><p> Vantage, Axis, Milestone, Hikvision, Howen</p>
      </div>
      <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>
      </div>
        <div className='svg-animation-container'> 
        <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>
      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Automation and Business Analytics</h2>
        <p style={{width:'45rem'}}> 
Products: ERP, IT Operation Management, Business Autossmation, Data and Analytics, One Card System, Intelligent Transportation System</p>
        <span>Vendor:</span><p> IBM, Sage, Micro Focus, Cisco, Vantage, Howen</p>
      </div>
      
      </div>
</div>
  );
};

export default SvgAnimation;
