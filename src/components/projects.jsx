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
           <h5>
              <a target="_blank" className="project-link" href="https://github.com/faraamcode/management_system">
       result managment system            </a></h5>
           <div className="other-info">
               <div className="stack-dettails">
                <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <a target="_blank" className="project-link" href="https://github.com/faraamcode/management_system">
                   
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
                            </a>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/cbt.png" alt=""/>
           </div>
           <h5>
           <a target="_blank" className="project-link" href="https://github.com/faraamcode/cbt">computer based test system(CBT)          </a></h5>
           <div className="other-info">
               <div className="stack-dettails">
               <FaCss3 className="stack-icon"/> <FaPhp className="stack-icon"/>
               </div>
               <div className="project-links">
               <a target="_blank" className="project-link" href="https://github.com/faraamcode/cbt">
                   
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
                            </a>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/onlineschool.png" alt=""/>
           </div>
           <h5>
           <a target="_blank" className="project-link" href="https://roemichsschools.online">online school          </a></h5>
           <div className="other-info">
               <div className="stack-dettails">
               <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <a target="_blank" className="project-link" href="https://roemichsschools.online">
                   
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
                            </a>
               </div>
           </div>
       </div>
       <div className="single-project">
           <div className="img-container">
            <img src="/projects/portfolio.png" alt=""/>
           </div>
           <h5>
           <a target="_blank" className="project-link" href="https://github.com/faraamcode/cbt">portfolio          </a></h5>
          
           <div className="other-info">
               <div className="stack-dettails">
               <FaNodeJs className="stack-icon"/> <FaReact className="stack-icon"/>
               </div>
               <div className="project-links">
               <a target="_blank" className="project-link" href="https://github.com/faraamcode/portfolio">
                   
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
                            </a>
               </div>
           </div>
       </div>
    </div>
   </section>
  );
 }

 export default Projects;