import {useState, useEffect} from 'react';
import axios from 'react'
import {FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'

 function About(){

  
  return (
   <section className="about-section">
     <div className="section-title">
       About me
     </div>
    <div className="section-container">
     <div className="about-info">
       <p>Innovative tech mind with  years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions,and managing databases.Valuable team member who has experience diagnosing problems and developing solutions.</p>
       <p>Innovative tech mind with  years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions,and managing databases.Valuable team member who has experience diagnosing problems and developing solutions.</p>

     </div>
     <div className="about-image">
       <img src="/images/rasaq.jpg" alt=""/>
     </div>
     <div className="about-stack">
       <h5>my stack</h5>
       <div className="stack-container">
         <ul className="stack-lists">
           <li className="a-stack"><FaNodeJs className="stack-item"/>Nodejs</li>
           <li className="a-stack"><FaReact className="stack-item"/>Reactjs</li>
           <li className="a-stack"><SiJavascript className="stack-item"/>Javascript</li>
           <li className="a-stack"><FaPhp className="stack-item"/>PHP</li>
           <li className="a-stack"><FaReact className="stack-item"/>HTML</li>
           <li className="a-stack"><FaCss3 className="stack-item"/>CSS</li>
         </ul>
       </div>
     </div>
    </div>
   </section>
  );
 }

 export default About;