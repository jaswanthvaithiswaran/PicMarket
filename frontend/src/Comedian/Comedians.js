import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import Base from "../core/Base";
import Card from "../Home/Card";
import {getComedians} from "./comedianapicalls";
const Comedians = ()=>{
    
    const [comedians,setComedians] = useState([]);
    const [error,setError] = useState(false);

    const loadComedians = () => {
        getComedians()
        .then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setComedians(data);
            }
        })
    }
    useEffect(()=>{
        loadComedians();
    },[]);

    return (
        <Base className="bg-grey-700">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {comedians.map((comedian,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]">
                <Link to={`/comedian/movies/${comedian._id}`} key={index} className="">
                <Card 
                name={comedian.name}
                imgsrc={comedian.photo_location}
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
export default Comedians;