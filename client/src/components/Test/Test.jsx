import React, { useEffect, useState } from "react";
import "./Test.css";
import axios from "axios";
const Test = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:5000").then((res) => setData(res.data));
   }, []);
   return (
      <div className="container test">
         {data?.map((item, index) => {
            return (
               <div>
                  <img
                     src={`http://localhost:5000/images/${item.image}`}
                     alt="not working"
                  />
                  <p>{item.category}</p>
                  <p>{item.id}</p>
               </div>
            );
         })}
      </div>
   );
};

export default Test;
