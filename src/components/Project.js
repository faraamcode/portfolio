import {useState, useEffect} from 'react';
import axios from 'react'
import {FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaLink} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import {Link} from "react-router-dom"
import {useGlobalContext} from "../context.jsx"
import {project} from './info'



function Project(){
  const  {projectId, handleProject} = useGlobalContext()
  const {project_url, name, img,github,stack, description,} = project.filter((item)=> item.id === projectId)[0]
console.log(project_url, img,stack);
  return (
   <section className="about-section">
     <div className="section-title">
       {name}
     </div>
    <div className="section-container project-container project-one">
       <div className="single-project project-desc">
          <p>{description}</p>
       </div>
       <div className="single-project single-proj">
        
           <div className="img-container">
            <img src={img} alt={name}/>
           </div>
           <h5>
              <a target="_blank" className="project-link" href={github}>{name}</a></h5>
           <div className="other-info">
               <div className="stack-dettails">
                {stack.map(item=> item)}
               </div>
               <div className="project-links">
               <a target="_blank" className="project-link" href={github}>
                   
               <FaGithub className="project-icon"/> <FaLink className="project-icon"/>
                            </a>
               </div>
           </div>
       </div>

    </div>
   </section>
  );
 }

 export default Project;