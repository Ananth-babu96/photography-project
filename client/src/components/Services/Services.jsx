import React from "react";
import "./Services.scss";
import Button from "../../utilities/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Services = () => {
   const content = useSelector((state) => state.data.dataList);
   const sampleImage1 = content.find((item) => item.id === 33);
   const sampleImage2 = content.find((item) => item.id === 46);
   const sampleImage3 = content.find((item) => item.id === 69);
   const sampleImage4 = content.find((item) => item.id === 36);
   const sampleImage5 = content.find((item) => item.id === 48);
   const sampleImage6 = content.find((item) => item.id === 76);

   return (
      <div className="container services">
         <div className="title">
            <h1>Why Choose Our Studio</h1>
         </div>
         <div className="services_section">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="services_section_image">
               {sampleImage1 && (
                  <img
                     className="main_img"
                     src={`http://localhost:5000/images/${sampleImage1.image}`}
                     alt="notfoud"
                  />
               )}
               {sampleImage4 && (
                  <img
                     className="side_img"
                     src={`http://localhost:5000/images/${sampleImage4.image}`}
                     alt="image not found"
                  />
               )}
            </div>
            <div className="services_section_text">
               <div className="section_title">
                  <h2>Wedding and Pre-Wedding with a Personal Touch!</h2>
               </div>
               <p>
                  Your love story is unique, and We make sure to capture it in
                  all its beauty. Whether it’s the energy of your wedding day or
                  the fun of a pre-wedding shoot, We're there to capture every
                  laugh, every glance, and every unforgettable moment. We love
                  creating creative themes that fit your style, so every photo
                  reflects your special journey.
               </p>
            </div>
         </div>
         <div className="services_section">
            <div className="services_section_text">
               <div className="section_title">
                  <h2>Pregnancy and Baby Shoots Full of Love</h2>
               </div>
               <p>
                  Time flies, and We're here to help you hold onto those
                  fleeting moments. We specialize in pregnancy and baby
                  photoshoots, creating a relaxed and playful environment where
                  we capture the natural joy and love of these precious times.
                  From glowing moms-to-be to adorable newborns, We're dedicated
                  to capturing memories you’ll treasure forever.
               </p>
            </div>
            <div className="services_section_image">
               {sampleImage2 && (
                  <img
                     className="main_img"
                     src={`http://localhost:5000/images/${sampleImage2.image}`}
                     alt="notfoud"
                  />
               )}
               {sampleImage5 && (
                  <img
                     className="side_img"
                     src={`http://localhost:5000/images/${sampleImage5.image}`}
                     alt="image not found"
                  />
               )}
            </div>
         </div>
         <div className="services_section">
            <div className="services_section_image">
               {sampleImage3 && (
                  <img
                     className="main_img"
                     src={`http://localhost:5000/images/${sampleImage3.image}`}
                     alt="notfoud"
                  />
               )}
               {sampleImage6 && (
                  <img
                     className="side_img"
                     src={`http://localhost:5000/images/${sampleImage6.image}`}
                     alt="image not found"
                  />
               )}
            </div>
            <div className="services_section_text">
               <div className="section_title">
                  <h2>Capturing Life’s Best Moments!</h2>
               </div>
               <p>
                  We're passionate about bringing your most special moments to
                  life with every click. Whether it’s a wedding, pre-wedding,
                  pregnancy, or baby photoshoot, We go beyond just taking
                  pictures—We're here to tell your story. From the joy of saying
                  "We do" to the excitement of welcoming a new baby, each shot
                  becomes a cherished memory.
               </p>
            </div>
         </div>
         <div className="button-container">
            <Link to="/gallery">
               <Button size={"medium"} text={"See Gallery"} />
            </Link>
         </div>
      </div>
   );
};

export default Services;
