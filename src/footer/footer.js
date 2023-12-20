import React, { Component } from 'react'
import tw from '../../src/asset/tw.png'
import fb from '../../src/asset/fb.png'
import linkedin from '../../src/asset/linkedin.png'
import insta from '../../src/asset/insta.png'
import './footer.css';
 const Footer=()=>
 {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/healthplan'>
                            <p>Health PLan</p>
                        </a>
                        <a href='/individual'>
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/healthplan'>
                            <p>Health PLan</p>
                        </a>
                        <a href='/individual'>
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/healthplan'>
                            <p>Health PLan</p>
                        </a>
                        <a href='/individual'>
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <div className='socialmedia'>
                            <p><img src={fb} width={40} alt=""/></p>
                            <p><img src={tw} width={40} alt=""/></p>
                            <p><img src={linkedin} width={40} alt=""/></p>
                            <p><img src={insta} width={40} alt=""/></p>
                        </div>
                    </div>
                </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Brilliant. All right reserved.
                    </p>

                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p>Terms & Condition</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/Security'><div><p>Security</p></div></a>
                </div>
            </div>
            </div>
        </div>
    )

 }
 export default Footer;