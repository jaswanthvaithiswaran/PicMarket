import React from "react";
import Card from "../Home/Card";
import Base from "../core/Base";
import data from "./home.json";
import { Link } from "react-router-dom";

const  Home=()=> {



 

  



  return (
    <Base className="bg-grey-700">
      <div className="flex">
        {data.map((item,index)=>{
            return(
                <Link to={`${item.link}`} key={index}>
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