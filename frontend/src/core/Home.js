import React from "react";
import Card from "../Home/Card";
import Base from "../core/Base";
import data from "./home.json";
import { Link } from "react-router-dom";



const  Home=()=> {



 

  



  return (
    <Base>
      <div className="grid grid-cols-3">
        {data.map((item,index)=>{
            return(
                <Link to={`${item.link}`} key={index} className="ml-[45px] mt-10">
                <Card 
                name={item.name}
                imgsrc={item.imgsrc}
                />
                </Link>
            )
        })}
      </div>
      
    </Base>
  )
}
export default Home;