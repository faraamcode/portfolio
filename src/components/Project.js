import {projects} from './info'
function Projects(){

  return (
   <section className="section-projects">
      <div className="project-section-title">
        <div className="section-title project-title">
          <h3>all projects</h3>
          <div className="underline"></div>
        </div>
        <div className="filer-form">
         <h5>Filter by</h5>
         <select name="course" id="">
          <option value="ALL">ALL</option>
          <option value="HTMLCSS">HTML & CSS</option>
          <option value="JAVASCRIPT">JAVASCRIPT</option>
          <option value="PHP">PHP</option>
          <option value="NODEJS">NODE JS</option>
         </select>
        </div>
      </div>
      <div className="project-card-container">
       {projects.map((project, index)=>{
            return(
       
       <article className="single-project" key={index}>
        <h1>{project.title}</h1>
       </article>
            )
       })
       }
      </div>
   </section>
  );
 }

 export default Projects;