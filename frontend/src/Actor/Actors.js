import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Card from "../Home/Card";
import { getActors } from "./actorapicalls";
const Actors = ()=>{

    const [actors,setActors] = useState([]);
    const [error,setError] = useState(false);
    const loadActors = () => {
        getActors()
        .then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setActors(data);
            }
        })
    }
    useEffect(()=>{
        loadActors();
    },[]);

    return(
        <Base className="bg-grey-700">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {actors.map((actor,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]" key={index}>
                <Link to={`/actor/movies/${actor._id}`}  className="">
                <Card 
                name={actor.name}
                imgsrc={actor.photo_location}
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
export default Actors;