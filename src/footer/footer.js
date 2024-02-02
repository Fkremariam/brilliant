import React, { Component } from 'react'
import tw from '../../src/asset/tw.png'
import fb from '../../src/asset/fb.png'
import linkedin from '../../src/asset/linkedin.png'
import insta from '../../src/asset/insta.png'
import './footer.css';
import g from '../asset/g.png'
 const Footer=()=>
 {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <img src={g} width={230}/>
                        <p className='discrepionFooter'>Brilliant Hi tech offers hardware installation and software development services. Our headquarters are located in Addis Ababa, Ethiopia. Established since 2018G.C by visionary Tewodros Meseret, Brilliant Hi tech Solutions is a registered Sole Proprietorship with the Ministry of Trade. We specialize in wholesale trade in communication, computer hardware, and peripheral equipment. Additionally, we hold an investment license from the City Administration of Addis Ababa Investment Commission for software development. </p>
                      
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Adress</h4>
                        <p>A.A, 22 Mazoria, Hanan K Plaza office #804 </p>
                        <p>+25196 0231629</p>
                        <p>+251989651175 </p>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>LINKS</h4>
                        <a href='/employer'>
                            <p>&lt;	HOME 
                                <p>
                        &lt;	PRODUCT</p>
                        </p>
                        </a>
                        <a href='/healthplan'>
                            <p>&lt;	SERVICE AND SOLUTION 
                        </p>
                        </a>
                        <a href='/individual'>
                            <p>
                        &lt;	PARTNER 
                        </p>
                        <p>
                        &lt;	ABOUT US
                        </p>
                        <p>&lt;	CONTACT US</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>SERVICE AND SOLUTION </h4>
                        <a href='/employer'>
                            <p>&lt;	Network installation 
                                <p>
                        &lt; Network support</p>
                        </p>
                        </a>
                        <a href='/healthplan'>
                            <p>&lt;	Security solutions 
                        </p>
                        </a>
                        <a href='/individual'>
                            <p>
                        &lt; Cloud services 
                        </p>
                        <p>
                        &lt; Smart class room
                        </p>
                        <p>&lt;	Data Center Setup </p>
                        </a>
                        <p>&lt; Network Management</p>
                        <p>&lt; CCTV Surveillance System </p>
                        <p>&lt; RFID & Finger Print Access Control System </p>
                        <p>&lt; Fire Alarm System</p>
                        <p>&lt; Audio /Visual</p>
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