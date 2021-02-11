import {Link} from 'react-router-dom';
function Navbar(){

  return (
   <section className="section-nav">
    <div className="navbar">
     <div className="logo-container">
      <img src="/images/logo.png" alt="" className="nav-logo"/>
     </div>
     <ul className="nav-links">
      <Link to="/" className="link-route">
      <li className="link" className="link-route">about</li>
      </Link>
      <Link to="/" className="link-route">
      <li className="link">contact</li>
      </Link>
      <Link to="/" className="link-route">
      <li className="link">services</li>
      </Link>
      <Link to="/" className="link-route">
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