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
        <h2>Enterprise Networking</h2>
        <p> Products: Routers, Switches, SD-WAN, Indoor & Outdoor Access Points, WLAN Controllers</p>
        <span>Vendor:</span><p> Cisco, Huawei, Juniper, Barracuda, DELLEMC, and Extreme</p>
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
        <h2>Enterprise Networking</h2>
        <p> Products: Routers, Switches, SD-WAN, Indoor & Outdoor Access Points, WLAN Controllers</p>
        <span>Vendor:</span><p> Cisco, Huawei, Juniper, Barracuda, DELLEMC, and Extreme</p>
      </div>
      </div>
       <div className='svg-animation-container'> 
    

      <div className={`content_product ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h2>Enterprise Networking</h2>
        <p> Products: Routers, Switches, SD-WAN, Indoor & Outdoor Access Points, WLAN Controllers</p>
        <span>Vendor:</span><p> Cisco, Huawei, Juniper, Barracuda, DELLEMC, and Extreme</p>
      </div>
      <div className="svg-container">
        <div className="svg-item">
          <img src={Enterprise_Networking}/>
        </div>
      </div>
      </div>
</div>
  );
};

export default SvgAnimation;
