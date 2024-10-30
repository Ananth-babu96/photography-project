import React, { useEffect } from "react";
import "./Contact.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <section className="container contact">
         <div className="contact_info">
            <div className="contact_info_title">
               <h1>Get In Touch</h1>
            </div>
            <div className="contact_info_description">
               <p>
                  Got questions or need support? Reach out to us today! We're
                  ready to assist with your booking and answer any inquiries you
                  may have.
               </p>
            </div>
            <div className="contact_info_content">
               <div className="content_icon">
                  <FaPhoneAlt />
               </div>
               <div className="content_details">
                  <p>Phone</p>
                  <p>9884950398</p>
               </div>
            </div>
            <div className="contact_info_content">
               <div className="content_icon">
                  <IoMdMail />
               </div>
               <div className="content_details">
                  <p>Mail Us</p>
                  <p>OurStudio@gmail.com</p>
               </div>
            </div>
            <div className="contact_info_content">
               <div className="content_icon">
                  <FaLocationDot />
               </div>
               <div className="content_details">
                  <p>Location</p>
                  <p>64,Anna nagar</p>
                  <p>Kumbakonam</p>
                  <p>Tamil nadu , 612001</p>
               </div>
            </div>
         </div>
         <div className="contact_form">
            <div className="contact_form_description">
               <h2>Fill out the below form</h2>
               <form>
                  <div>
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" />
                  </div>
                  <div>
                     <label htmlFor="phone">Phone Number</label>
                     <input type="number" name="number" />
                  </div>
                  <div>
                     <label htmlFor="email">Email Id</label>
                     <input type="email" name="email" placeholder="optional" />
                  </div>
                  <div>
                     <label htmlFor="message">Message</label>
                     <textarea name="message"></textarea>
                  </div>
                  <div>
                     <input type="submit" value="send" />
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
