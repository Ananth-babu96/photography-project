import React, { useEffect, useRef, useState } from "react";
import Services from "../Services/Services";
import Map from "../../utilities/Map/Map";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setupData } from "../../Store/DataSlice";
import Hero from "../Hero/Hero";

const Home = () => {
   const [data, setData] = useState([]);
   const dispatch = useDispatch();
   useEffect(() => {
      axios.get("http://localhost:5000").then(async (res) => {
         await setData(res.data);
         await dispatch(setupData(res.data));
      });
      window.scrollTo(0, 0);
   }, []);
   const datas = useSelector((state) => state.data);
   console.log(datas);

   return (
      <div>
         <Hero />
         <Services />
      </div>
   );
};

export default Home;
