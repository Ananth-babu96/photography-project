import React, { useEffect, useState } from "react";
import "./PortfolioCategory.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const PortfolioCategory = () => {
   const { category } = useParams();
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:5000").then((res) => {
         let dataList = res.data;
         dataList = dataList.filter((item) => item.category === category);
         setData(dataList);
      });
   }, []);
   return (
      <div className="container category">
         <div className="category_wrapper">
            {data?.map((item, index) => {
               return (
                  <div key={index}>
                     <img
                        src={`http://localhost:5000/images/${item.image}`}
                        alt=""
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default PortfolioCategory;
