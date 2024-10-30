import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

   const navigate = useNavigate();
   const navigateTo = (path) => {
      setMobileMenu(false);
      navigate(path);
   };
   const scrollToServices = () => {
      window.scrollTo({
         top: 300, // Replace with the target scroll position
         behavior: "smooth",
      });
   };
   return (
      <div className="container navbar">
         <div className={`side_menu ${mobileMenu ? "show" : ""}`}>
            <div className="close_icon" onClick={() => setMobileMenu(false)}>
               <FaTimes />
            </div>
            <ul>
               <li onClick={() => navigateTo("/")}>Home</li>
               <li onClick={() => navigateTo("/gallery")}>Gallery</li>
               <li onClick={() => navigateTo("/contact")}>Contact</li>
            </ul>
         </div>
         <div className="logo">
            <h1>
               <Link to="/">LOGO</Link>
            </h1>
         </div>
         <div className="mobile-menu" onClick={() => setMobileMenu(true)}>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/gallery">Gallery</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
