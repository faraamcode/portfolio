import react from "react"
import {Link} from "react-router-dom"
import { useForm, ValidationError } from '@formspree/react';
function Contact(){
    const [state, handleSubmit] = useForm("xayawzkq");

    return (
        <section className="about-section">
        <div className="section-title">
           My contacts
        </div>
    {state.succeeded ?
    <div className="success-contact">
        <p >Thanks for contacting me!</p>
        <Link to="/">
        <button className="btn ">back home</button>
        </Link>

    </div>
          :


  
       <div className="section-contacts">
        <div className="contacts-info">

        <p>Thank you for visiting my site. My customer services are always at my heart. Don't go without leaving a message for me about your needs and what you feel about me.</p>
        </div>
        <div className="social-contact">
         <a href="https://github.com/faraamcode">
         <img src="/images/github.svg" alt=""/>

         </a>
         <a href="https://twitter.com/faraamcode">
         <img src="/images/twitter.svg"  alt=""/>

         </a>
         <a href="https://www.linkedin.com/in/ibrahim-abdulrasaq-761841199/">
         <img src="/images/linkedin.svg"  alt=""/>

         </a>
         <a href="https://web.facebook.com/ikayode2">
         <img src="/images/facebook.svg"  alt=""/>

         </a>
         <a href="mailto: abdulrasaqalagbede@gmail.com">
         <img src="/images/gmail.svg"  alt=""/>

         </a>
       </div>
        <form  onSubmit={handleSubmit} className="form-container">
          <div className="form-control-container">
              <label htmlFor="">name</label>
          <input type="text" name="name" id="name" className="form-input" placeholder="enter your name"/>
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
          </div>
          <div className="form-control-container">
              <label htmlFor="">email</label>
          <input type="text" name="email" id="email" className="form-input" placeholder="enter your email"/>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
          <div className="form-control-container">
              <label htmlFor="">message</label>
          <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="type your message..."></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <div className="form-control-container">
              <button type="submit" disabled={state.submitting} className="submit-btn btn">send</button>
          </div>

        </form>

       </div>
}
      </section>
    );
   }
  
   export default Contact;