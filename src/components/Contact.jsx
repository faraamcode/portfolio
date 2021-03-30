function Contact(){

    return (
        <section className="about-section">
        <div className="section-title">
           My contacts
        </div>
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
        <form action="https://formspree.io/f/xayawzkq" method="post" className="form-container">
          <div className="form-control-container">
              <label htmlFor="">name</label>
          <input type="text" name="name" id="" className="form-input" placeholder="enter your name"/>
          </div>
          <div className="form-control-container">
              <label htmlFor="">email</label>
          <input type="text" name="email" id="" className="form-input" placeholder="enter your email"/>
          </div>
          <div className="form-control-container">
              <label htmlFor="">message</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="type your message..."></textarea>
          </div>
          <div className="form-control-container">
              <button type="submit" className="submit-btn btn">send</button>
          </div>

        </form>

       </div>
      </section>
    );
   }
  
   export default Contact;