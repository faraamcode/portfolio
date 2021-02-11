import {Link} from 'react-router-dom';
function Navbar(){

  return (
   <section className="section-nav">
    <div className="navbar">
     <div className="logo-container">

     </div>
     <ul className="nav-links">
      <Link to="/about" className="link-route">
      <li className="link" className="link-route">about</li>
      </Link>
      <Link to="/contact" className="link-route">
      <li className="link">contact</li>
      </Link>
      <Link to="/services" className="link-route">
      <li className="link">services</li>
      </Link>
      <Link to="/projects" className="link-route">
      <li className="link">projects</li>
      </Link>
      <li className="link"></li>
      <li className="link"></li>
      <li className="link"></li>
     </ul>
    </div>
   </section>
  );
 }

 export default Navbar;