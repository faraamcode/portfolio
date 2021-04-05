import {useState, useEffect} from 'react';
import axios from 'react'
import {FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook} from 'react-icons/ai'

 function Footer(){

  
  return (
<footer>
<div className="social-icons">
    <h5>&#169; All right reserved. Designed inspiration from Yusuf Adeyemo's portfolio </h5>
</div>
<div className="footer-info">
    <div className="footericon">
    <a target="_blank" href="https://twitter.com/faraamcode">

      <AiFillGithub/>
         </a>
      </div>
    <div className="footericon">
    <a target="_blank" href="https://www.linkedin.com/in/ibrahim-abdulrasaq-761841199/">

      <AiFillLinkedin/>
         </a>
      </div>
    <div className="footericon">
    <a target="_blank" href="https://twitter.com/faraamcode">

      <AiFillTwitterSquare/>
         </a>
      </div>
    <div className="footericon">
    <a target="_blank" href="https://web.facebook.com/ikayode2">

      <AiFillFacebook/>
         </a>
      </div>
</div>
</footer>
  );
 }

 export default Footer;