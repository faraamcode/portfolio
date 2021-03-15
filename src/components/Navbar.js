import {Link} from 'react-router-dom';
import {AiFillContacts} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {FaBars, FaTimes} from 'react-icons/fa'


import {GrProjects} from 'react-icons/gr'
function Navbar(){

  return (
   <section className="section-nav">
    <div className="navbar">
     <div className="logo-container">
      <img src="/images/logo.png" alt="" className="nav-logo"/>
      <h6>Ibrahim Abdulrasaq</h6>
     </div>
     <ul className="nav-links">
      <Link to="/" className="link-route">
      <li className="link"><FiUser className="navbar-icon"/>about</li>
      </Link>
      <Link to="/" className="link-route">
      <li className="link"> <GrProjects className="navbar-icon"/>projects</li>
      </Link>
      <Link to="/" className="link-route">
      <li className="link"><AiFillContacts className="navbar-icon"/>contact me</li>
      </Link>
     </ul>
     <FaBars className="menu-logo"/>
    </div>
    <div className ="sidebar">
    <FaTimes className="close-btn"/>
    <ul className="sidebar-links">
      <Link to="/" >
      <li className=""><FiUser className="navbar-icon"/>about</li>
      </Link>
      <Link to="/" className="link-route">
      <li className="link"> <GrProjects className="navbar-icon"/>projects</li>
      </Link>
      <Link to="/" className="link-route">
      <li className=""><AiFillContacts className="navbar-icon"/>contact me</li>
      </Link>
     </ul>
    </div>
   </section>
  );
 }

 export default Navbar;