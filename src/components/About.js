import {useState, useEffect} from 'react';
import axios from 'react'
const handleSubmit = async (e)=>{
 e.preventDefault();
 
 
   let submittion = await fetch("http://localhost:3001/data", {
     method : "post",
     mode : "no-cors",
     headers : {
    "Accept" : "application/json",
    "Content-type": "application/json"
   },
   body: JSON.stringify({
     data : "dele"
    })
   });
   const response = await submittion.json();
   console.log(response);
 
 
 }
 function About(){
  const [data, setData] = useState("")
  // const handleSubmitByAxios = async(e)=>{
  //  e.preventDefault();
  //  try {
  //   let result = axios.get('http://localhost:3001/data')

  //   console.log(result);
  //  } catch (error) {
  //   console.log(error);
  //  }
   
  
  return (
   <section className="section-contact">
<form action="">
 <input type="text"/>
 <input type="submit" value="submit" onClick={()=>handleSubmit}/>
</form>
   </section>
  );
 }

 export default About;