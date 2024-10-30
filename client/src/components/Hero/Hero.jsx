import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Button from "../../utilities/Button/Button";
import Slider from "../../utilities/Slider/Slider";
const Hero = () => {
   return (
      <div className="container home">
         <div className="home_hero">
            <div className="home_hero_text">
               <h1>Where Every Love Story Becomes a Timeless Memory!</h1>

               <p>
                  Every moment of your love story deserves to be captured in its
                  most beautiful form. From the quiet smiles to the grand
                  celebrations, our lens finds the magic in each glance, touch,
                  and laugh. Seeking a photography experience that feels as
                  special as your journey together? We bring you stunning
                  locations and heartfelt artistry to transform your cherished
                  memories into timeless images.
               </p>
               <Button size={"medium"} text={"Book Now"} />
            </div>
         </div>
         <Slider />
         <div className="mobile_title">
            <h1>Where Every Love Story Becomes a Timeless Memory!</h1>
            <p>
               Every moment of your love story deserves to be captured in its
               most beautiful form. From the quiet smiles to the grand
               celebrations, our lens finds the magic in each glance, touch, and
               laugh. Seeking a photography experience that feels as special as
               your journey together? We bring you stunning locations and
               heartfelt artistry to transform your cherished memories into
               timeless images.
            </p>
            <Button size={"medium"} text={"Book Now"} />
         </div>
      </div>
   );
};

export default Hero;
