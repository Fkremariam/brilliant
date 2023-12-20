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


import ScrollTrigger from 'react-scroll-trigger';
 function Home (){
    const [cards2 ] = useState([
        {
            image:fb,
            pargraph:"Malam Engineering is technically qualified firm for the service rendered intended for successful implementation of the Video Surveillance System, Video Conferencing, Data Center Infrastructure, Data Center Facility and Enterprise Networking.We Appreciate the services rendered by Malam Engineering PLC and wish the company a great success in its further endeavor."
            ,title:'MatIyas MOSHE'
        } ,
        {
            image:fb,
            pargraph:"Malam Engineering is technically qualified firm for the service rendered intended for successful implementation of the Video Surveillance System, Video Conferencing, Data Center Infrastructure, Data Center Facility and Enterprise Networking.We Appreciate the services rendered by Malam Engineering PLC and wish the company a great success in its further endeavor."
            ,title:'MatIyas MOSHE'
        } ,
        {
            image:fb,
            pargraph:"Malam Engineering is technically qualified firm for the service rendered intended for successful implementation of the Video Surveillance System, Video Conferencing, Data Center Infrastructure, Data Center Facility and Enterprise Networking.We Appreciate the services rendered by Malam Engineering PLC and wish the company a great success in its further endeavor."
            ,title:'MatIyas MOSHE'
        } 
    ])
    const [cards] = useState([

        {
            image:cloud,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },
        {
            image:webapp,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },
        {
            image:network,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },
        {
            image:security,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },
        {
            image: server,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },
        {
            image: server,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        },{
            image: server,
            title:"Data Center Infrastructure and Cloud",
            text:"Data Center Infrastructure and Cloud Data Center Infrastructure and Cloud"
        }

        
    ])
    const [counterOn, setCounteron] = useState(false);
    return (
        <div>
        <Carousel/>
        <div className='home_style'>
            <div className='section_padding'>
        <div className='logo_and-aboutUs'>
            
            <div className='logo-aside-aboutUs'><img src={fb} width={300} alt=''/></div>
            <div className='home-aboutUs'>
                <h2>About us</h2>
                <h1>Malam Engineering PLC</h1>
                <pre>
                    <p>Highly experienced professionals founded Malam Engineering PLC with many professional level accreditations in the <br></br>
                    industry. In addition to the expertise of the founders, Malam Engineering believes in win-win partnership with vendors,  <br></br>
                    distributors, customers and other stake holders to achieve its mission. Malam is closely working with many  <br></br>
                    Information and Communication Technology experts at individual level and companies in the country. The areas of  <br></br>
                    these experts include, but not limited to, Security Solutions, Network and Data Center Infrastructure, Data Center  <br></br>
                    Facilities, Operating systems, Anti-Virus Solutions and Enterprise Services.</p>
                </pre>
            
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
                <img src={happy} width={150}/>
                <img src={exprince} width={250}/>
                <img src={project} width={250}/>
                <img src={partner} width={150}/>
            </div>
            <ScrollTrigger className='countup_list' onEnter={()=> setCounteron(true)} onExit={()=> setCounteron(false)}> 
                
                <h1>
                    {counterOn && < CountUp start={0} end={30} duration={2} delay={0}/>}+                
                </h1>
               
                <h1>
                    {counterOn && < CountUp start={0} end={55} duration={2} delay={0}/>}+                
                </h1>
                
                <h1>
                    {counterOn && < CountUp start={0} end={9} duration={2} delay={0}/>}+                
                </h1>
                
                <h1>
                    {counterOn && < CountUp start={0} end={24} duration={2} delay={0}/>}+                
                </h1>
            </ScrollTrigger>
        </div>
        <div className='Why_choose_us'>
            <div>
                <h1>Why choose us</h1>
                <p> We Demonstrate Our Care for Your Growth by Providing a Best End to End ICT Solution!</p>
                </div>
                <div className='why_choose_img'>
                    <div className='why_img1'>
                        <img src={fb} width={50} />
                        <h3>Professionalism</h3>
                    </div>
                    <div className='why_img2'> 
                        <img src={cloud} width={50}/>
                        <h3>Customer-Focus</h3>
                    </div>
                    <div className='why_img3'>
                        <img src={exprince} width={50}/>
                        <h3>Timeliness & Integrity</h3>
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