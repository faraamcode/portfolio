import {FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaLink} from 'react-icons/fa';
export const info = 'Innovative tech mind with  years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions,and managing databases.Valuable team member who has experience diagnosing problems and developing solutions.';
export const projects = [
 {
  id: 1,
  title: "online school",
  image : "",
  repository: "",
  url : "",
  technologies: ['html', 'css', 'javascript']
 },
  {
  id: 2,
  title: "CBT",
  image : "",
  repository: "",
  url : "",
  technologies: ['html', 'css', 'javascript']
 },
  {
  id: 1,
  title: "Gallery system",
  image : "",
  repository: "",
  url : "",
  technologies: ['html', 'css', 'javascript']
 },
  {
  id: 1,
  title: "",
  image : "",
  repository: "",
  url : "",
  technologies: ['html', 'css', 'javascript']
 }
]
export const project = [
{
    id : 1,
    name: "result managment system",
    description: "This is a web application build with NODEJS for the backend(RESTAPI) and ReactJS for the frontend. This application consist of three major part(dashboard); Student, teacher and the admin.",
    img: "/projects/result.png",
    project_url : "https://github.com/faraamcode/management_system",
    github : "https://github.com/faraamcode/management_system",
    stack: [
        <FaNodeJs className="stack-icon"/>,
        <FaReact className="stack-icon"/>
    ]
},
{
    id : 2,
    name: "Computer Based System(CBT)",
    description: "This is a web application build with PHP, Vanilla Javascript and other technologies. The application is to allow teachers to set and store examination questions for student assesment.   ",
    img: "/projects/cbt.png",
    project_url : "https://github.com/faraamcode/cbt",
    github : "https://github.com/faraamcode/cbt",
    stack: [
        <FaPhp className="stack-icon"/>,
        <FaHtml5 className="stack-icon"/>
    ]
},
{
    id : 3,
    name: "Online School",
    img: "/projects/onlineschool.png",
    description: "This is a single web application written with PHP, Vanilla Javascript, CSS and other technologies like boostrap. This application allow students and teachers to have a conventional class experience with embeded live video conference, chat, submition and taking of class notes, assignment and class excercises.",
    project_url : "https://roemichsschools.online",
    github : "https://roemichsschools.online",
    stack: [
        <FaPhp className="stack-icon"/>,
        <FaNodeJs className="stack-icon"/>
    ]
},
{
    id : 4,
    name: "Portfolio",
    img: "/projects/portfolio.png",
    description: "This is my personal portfolio site built with REACTJS and HTML/CSS. This allow the user to present information to the world and get instant feedback. ",
    project_url : "https://github.com/faraamcode/portfolio",
    github : "https://github.com/faraamcode/portfolio",
    stack: [
        <FaHtml5 className="stack-icon"/>,
        <FaReact className="stack-icon"/>
    ]
}
]