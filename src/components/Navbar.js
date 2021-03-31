import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AiFillContacts} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {FaBars, FaTimes} from 'react-icons/fa'



import {GrProjects} from 'react-icons/gr'
function Navbar(){
const [showSidebar, setShowSidebar] = useState(false);
const openSidebar = ()=>{
 
 return setShowSidebar(true);
  
}
const closeSidebar = ()=>{
 
 return setShowSidebar(false);
  
}

  return (
   <section className="section-nav">
    <div className="navbar">
    <Link to="/">
     <div className="logo-container">
      <img src="/images/logo.png" alt="" className="nav-logo"/>
      <h6>Ibrahim Abdulrasaq</h6>
     </div>
    </Link>
     <ul className="nav-links">
      <Link to="/about" className="link-route">
      <li className="link"><FiUser className="navbar-icon"/>about</li>
      </Link>
      <Link to="/projects" className="link-route">
      <li className="link"> <GrProjects className="navbar-icon"/>projects</li>
      </Link>
      <Link to="/contact" className="link-route">
      <li className="link"><AiFillContacts className="navbar-icon"/>contact me</li>
      </Link>
     </ul>
     {/* <button type="button" > */}
     <FaBars className="menu-logo" onClick={openSidebar}/>
     {/* </button> */}
    </div>
    <div className ={`${!showSidebar ? 'sidebar': 'sidebar show-sidebar'}`}>
      
        <FaTimes className="close-btn" onClick={closeSidebar}/>
     
    <ul className="sidebar-links">
      <Link to="/about" onClick={closeSidebar} >
      <li className=""><FiUser className="navbar-icon" />about</li>
      </Link>
      <Link to="/projects" className="link-route" onClick={closeSidebar}>
      <li className="link"> <GrProjects className="navbar-icon" />projects</li>
      </Link>
      <Link to="/contact" className="link-route" onClick={closeSidebar}>
      <li className=""><AiFillContacts className="navbar-icon" />contact me</li>
      </Link>
     </ul>
    </div>
   </section>
  );
 }

 export default Navbar;