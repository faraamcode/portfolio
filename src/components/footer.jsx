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
    <div className="footericon"><AiFillGithub/></div>
    <div className="footericon"><AiFillLinkedin/></div>
    <div className="footericon"><AiFillTwitterSquare/></div>
    <div className="footericon"><AiFillFacebook/></div>
</div>
</footer>
  );
 }

 export default Footer;