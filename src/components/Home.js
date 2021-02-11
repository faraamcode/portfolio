 import {useState, useEffect} from 'react'
 import {info} from './info'; 
 function Home(){
const github = 'https://api.github.com/users/faraamcode';
const getUser = async()=>{
  const user = await fetch(github);
  const response = await user.json();
  setUserImage(response.avatar_url)
}
const [userImage, setUserImage] = useState(getUser());
const [more, setMore] = useState(false);
 
  return (
   <section className="section-home">
    <div className="home-container">
     <div className="description-container">
       <h1>Hello, I am</h1>
       <h2>Ibrahim abdulrasaq</h2>
       <article className="personal-info">
        <p>{more ? info : info.slice(0, 100)}</p>
        <button onClick = {()=> setMore(!more)} className="btn">{more ? "hide" : "readmore"}</button>
       </article>
     </div>
     <div className="picture-and-design-container">
       <div className="main-image-container-1">
          <img src="/images/nodejs.svg" alt="" className="image-upper upper-1"/>
          <img src="/images/react.svg" alt="" className="image-upper upper-2"/>
       </div>
       <div className="main-image-container-2">
         <img src="/images/main-image.jpg" alt="" className="main-image"/>
         
       </div>
       <div className="main-image-container-3">
          <img src="/images/mysql.svg" alt="" className="image-left left-1"/>
          <img src="/images/mongoDb.png" alt="" className="image-left left-2"/>
       </div>
       <div className="main-image-container-4">
          <img src="/images/php.svg" alt="" className="image-left left-1"/>
          <img src="/images/jsnew.jpg" alt="" className="image-left left-2"/>  
       </div>
       <div className="main-image-container-5">
          <img src="/images/css.svg" alt="" className="image-left bottom-1"/>
          <img src="/images/html-5.svg" alt="" className="image-left bottom-2"/> 
       </div>
     </div>
    </div>
   </section>
  );
 }

 export default Home;