import {useState, useEffect} from 'react';
import axios from 'react'
import {FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaLink} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'

 function Projects(){

  
  return (
   <section className="about-section">
     <div className="section-title">
       My projects
     </div>
    <div className="section-container project-container">
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/result.png" alt=""/>
           </div>
           <h5>result managment system</h5>
           <div className="other-info">
               <div className="stack-dettails">
                <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/cbt.png" alt=""/>
           </div>
           <h5>computer based test system(CBT)</h5>
           <div className="other-info">
               <div className="stack-dettails">
               <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/onlineschool.png" alt=""/>
           </div>
           <h5>Online school</h5>
           <div className="other-info">
               <div className="stack-dettails">
               <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/portfolio.png" alt=""/>
           </div>
           <h5>Portfolio</h5>
           <div className="other-info">
               <div className="stack-dettails">
               <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
                 <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
               </div>
           </div>
       </div>
    </div>
   </section>
  );
 }

 export default Projects;