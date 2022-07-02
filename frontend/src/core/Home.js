import React from "react";
import Card from "../Home/Card";
import Base from "../core/Base";
import data from "./home.json";
import { Link } from "react-router-dom";



const  Home=()=> {



 

  



  return (
    <Base>
      <div className="grid grid-cols-4">
        {data.map((item,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]">
                <Link to={`${item.link}`} key={index} className="">
                <Card 
                name={item.name}
                imgsrc={item.imgsrc}
                
                />
                </Link>
                </div>
            )
        })}
      </div>
      
    </Base>
  )
}
export default Home;