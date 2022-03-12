import React, {useRef} from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
import emailjs from "@emailjs/browser";

function Contact() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_boxcmeo', 'template_a9opr5x', form.current, 'v19pNPlH39CrPEdgQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+91- 8617868799</strong> or email <strong>bapidhibar.dhibar@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                        <form ref={form}  onSubmit={sendEmail}>
                           <input type="text" className="contact name" placeholder="Your name *" name="name" />
                           <input type="email" className="contact email" placeholder="Your Email *" name="emailId" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" name="subject"/>
                           <textarea name="message" id="message" placeholder="Write Your message" ></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact;