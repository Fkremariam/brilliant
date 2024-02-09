import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./PagesStyle.css";
import CompanyInfo from '../components/CompanyInfo';
import Carousel  from '../components/Carousel';
import fb from "../asset/fb.png"
import CountUp from 'react-countup';
import webapp from '../asset/webapp.png';
import cloud from '../asset/cloud.png';
import security from '../asset/secutity.png'
import network from '../asset/network_infrastructure.jpg';
import server from '../asset/server.png'
import exprince from '../asset/expriance.png';
import happy from '../asset/happyc.png';
import partner from '../asset/partener.png';
import project from '../asset/projects-done.png';
import download from '../asset/clintsImage/download.jpg';
import log0 from '../asset/clintsImage/log0.PNG';
import log1 from '../asset/clintsImage/log1.PNG';
import log2 from '../asset/clintsImage/log2.PNG';
import log3 from '../asset/clintsImage/log3.PNG';
import log5 from '../asset/clintsImage/log5.PNG';
import log6 from '../asset/clintsImage/log6.PNG';
import log7 from '../asset/clintsImage/log7.PNG';
import log8 from '../asset/clintsImage/log8.PNG';
import ddac from '../asset/ddac.png'
import e from '../asset/e.png'
import w from '../asset/w.png'

import ScrollTrigger from 'react-scroll-trigger';
 function Home (){
    const [cards2 ] = useState([
        {
            image:w,
            pargraph:"I wanted to take a moment to express my sincere gratitude for the exceptional work of brilliant hi tec, Your commitment to delivering a clean and efficient networking service has greatly benefited our organization."
            ,title:'MatIyas MOSHE'
        } ,
        {
            image:w,
            pargraph:"The reliability and performance of our network have noticeably improved since partnering with Brilliant Hi Tec. Thank you for your outstanding service and professionalism. "
            ,title:'MatIyas MOSHE'
        } ,
        {
            image:w,
            pargraph:"We appreciate your dedication to keeping our network running smoothly and efficiently, allowing us to focus on our core objectives without interruptions."
            ,title:'MatIyas MOSHE'
        } 
    ])
    const [cards] = useState([

        {
            image:cloud,
            title:"Network installation",
            text:"Our specialization lies in the installation, configuration, and cabling of network devices such as routers, switches, and firewalls. We excel at efficiently connecting devices to the network, guaranteeing seamless connectivity."
        },
        {
            image:webapp,
            title:"Network support",
            text:"We provide comprehensive network support services, encompassing troubleshooting, software updates, and security patching. Our expertise ensures smooth network operations and enhanced security measures."
        },
        {
            image:network,
            title:"Security solutions",
            text:"We specialize in network security, safeguarding networks from unauthorized access and malicious attacks. Our services include implementing firewalls, intrusion detection systems, and virus protection. Additionally, we conduct security assessments to identify network vulnerabilities and provide recommended remediation measures."
        },
        {
            image:security,
            title:"Cloud services",
            text:"We offer comprehensive cloud services, including cloud computing, storage, and backup solutions. Our services enable businesses to securely store and access data and applications over the internet."
        },
        {
            image: server,
            title:"Smart class room",
            text:"We enhance traditional classrooms with technology to improve teaching and learning. Our smart classrooms are equipped with a variety of essential technology tools."
        },
        {
            image: server,
            title:"Data Center Setup ",
            text:"We understand the significance of data center technology for organizations, as it serves as a crucial investment housing essential network systems vital for daily operations. Our specialized expertise lies in the maintenance of data center servers and storage devices."
        },{
            image: server,
            title:"Network Management ",
            text:"We specialize in network maintenance to prevent costly downtime and maximize business productivity. Trust us to handle all your preventive and corrective measures efficiently."
        },{
            image: server,
            title:"CCTV SURVEILLANCE SYSTEM ",
            text:"With our Closed Circuit Television (CCTV) services, we offer a direct and closed system for video transmission. Our solution ensures that all components, including cameras, display monitors, and recording devices, are directly connected. This provides a secure and controlled environment, distinct from broadcast television."
        },{
            image: server,
            title:"RFID & FINGER PRINT ACCESS CONTROL SYSTEM. ",
            text:"Our next-generation Smart Devices in Biometrics for Access Control offer enhanced building security, internal communications, and employee management. They provide these benefits at a significantly reduced total cost of ownership compared to previous biometric systems for physical access control."
        },{
            image: server,
            title:"FIRE ALARM SYSTEM ",
            text:"Ensuring safety and compliance with fire codes is a legal requirement, yet not everyone takes adequate precautions for personal safety. At our company, we are committed to addressing this concern by providing certified experts who can assess and enhance your fire-safety systems to meet required standards."
        },{
            image: server,
            title:"AUDIO / VISUAL ",
            text:"As an Audio Visual systems integrator and service provider, we specialize in delivering design, installation, and service solutions that enable enhanced communications for organizations."
        }

        
    ])
    const [counterOn, setCounteron] = useState(false);
    return (
        <div>
        <Carousel/>
        <div className='home_style'>
            <div className='section_padding'>
        <div className='logo_and-aboutUs'>
            
            <div className='logo-aside-aboutUs'><img src={ddac} width={400} alt=''/></div>
            <div className='home-aboutUs'>
                <h2>About us</h2>
                <h1>Brilliant Hi Tec Solution</h1>
                    <p>Brilliant Hi Tec is a prominent networking company established with the vision of delivering high-quality professional networking solutions to businesses of all sizes. Our team of highly skilled professionals is dedicated to providing robust networking systems that empower organizations to thrive in the digital age. 
                        currently, brilliant hi tec has established strong partner ship with key stakeholders in the industry. We have demonstrated a commitment to clean execution in optimizing network infrastructure, enabling clients to enhance their digital connectivity.
 
We look forward to the opportunity to serve you and contribute to your success.

                    </p>
            </div>
            </div>
        <section>
            
            <div className="Containe_WhatWeDo">
                <h1>What we <span>Do</span></h1>
                <div className='Card_listes'>
                    {cards.map((card, i)=> (
                        <div key={i} className='card'>
                            <img src={card.image} width={100}/>
                            <h3>{card.title}</h3>
                            <p>
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            </section>
        </div>
        
        <div className='countup'>
            <div className='countup_img'>
                
                
                
                
            </div>
            <ScrollTrigger className='countup_list' onEnter={()=> setCounteron(true)} onExit={()=> setCounteron(false)}> 
                <img src={happy} width={100}/>
                <h3>Happy clients </h3>
                <h1>
                    {counterOn && < CountUp start={0} end={60} duration={2} delay={0}/>}+    
                </h1>
                <img src={exprince} width={150}/>
               <h3>Done projects </h3>
                <h1>
                    {counterOn && < CountUp start={0} end={60} duration={2} delay={0}/>}+
                                   
                </h1>
                <img src={project} width={150}/>
                 <h3>Year of experience  </h3>
                <h1>
                    {counterOn && < CountUp start={0} end={5} duration={2} delay={0}/>}+ 
                                 
                </h1>
                <img src={partner} width={100}/>
                <h3>Partners</h3> 
                <h1>
                    {counterOn && < CountUp start={0} end={15} duration={2} delay={0}/>}+
                                   
                </h1>
            </ScrollTrigger>
        </div>
        <div className='Why_choose_us'>
            <div>
                <h1>Why choose us</h1>
                </div>
                <div className='why_choose_img'>
                    <div class="background-container"></div>

                    <div className='why_img1'>
                        
                        <h3>Reliability</h3>
                    </div>
            
                    <div className='why_img2'> 
                        
                        <h3>Advanced technology</h3>
                    </div>
                    <div className='why_img3'>
                        
                        <h3>Seamless integration</h3>
                    </div>
                    <div className='why_img4'>
                       
                        <h3>Proven track record</h3>
                    </div>
                    <div className='why_img5'>
                        
                        <h3>Cost-effectiveness</h3>
                    </div>
                </div>
            </div>
            <div className='Our_client'>
                <h1 style={{ fontSize: '4em' }}>Our Clients</h1>
                <Link to='/' ><img src={download}/></Link>
                <img src={log0}/>
                <img src={log1}/>
                <img src={log2}/>
                <img src={log3}/>
                <img src={log5}/>
                <img src={log6}/>
                <img src={log7} width={200} height={200}/>
                <img src={log8} width={200} height={200}/>
            </div>
            <div>
                <h1 style={{ fontSize: '4em',textAlign:'center' }}>What Our Customers Are Saying</h1>
                <div className='Card_listes2'>
                    {cards2.map((card, i)=> (
                        <div key={i} className='card2'>
                            <img src={card.image} width={100}/>
                            <p>
                                {card.pargraph}
                            </p>
                            <hr></hr>
                            <h3>{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <CompanyInfo/>
        </div>
        </div>
    )
 }
 export default Home;