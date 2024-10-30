import React from "react";
import "./Footer.scss";
import Map from "../../utilities/Map/Map";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
   return (
      <div className="container footer">
         <div className="footer_details">
            <div className="map">
               <h3>Location</h3>
               <p>64,Anna nagar</p>
               <p>Kumbakonam</p>
               <p>Tamil nadu , 612001</p>
               <Map />
            </div>
            <div className="footer_contact">
               <h3>Contact</h3>
               <div>
                  <IoLogoWhatsapp />
                  <span>8937829184</span>
               </div>
               <div>
                  <MdEmail />
                  <span>ourStudio@gmail.com</span>
               </div>
            </div>
         </div>
         <div className="copy_rights">
            <FaCopyright />
            <span>{new Date().getFullYear()}</span>
            <span>Our Studios.</span>
            <span>all rights reserved</span>
         </div>
      </div>
   );
};

export default Footer;
