import React from "react";
import Card from "../Home/Card";
import Base from "../core/Base";
import data from "./home.json";
import { Link } from "react-router-dom";



const  Home=()=> {



 

  



  return (
    <Base>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]" key={index} >
                <Link to={`${item.link}`} className="">
                <Card 
                name={item.name}
                imgsrc={item.imgsrc}
                cardtitle="card_title"
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