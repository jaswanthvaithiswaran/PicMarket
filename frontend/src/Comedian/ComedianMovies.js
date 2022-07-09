import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getComedianMovies } from "./comedianapicalls";
import Base from "../core/Base";
import Card from "../Home/Card";

const ComedianMovies =({match})=>{

    const [movies,setMovies] = useState([]);
   const [error,setError] = useState(false);
    
    const loadComedianMovies = (comedianId)=>{
        getComedianMovies(comedianId)
        .then(data => {
            if(data.error)
            {
                setError(data.error);
                
            }
            else{
                setMovies(data);
                console.log(data);
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        loadComedianMovies(match.params.comedianId);
    },[]);
    return(
        <Base className="bg-grey-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie,index)=>{
                return(
                    <div className="ml-[45px] mr-[45px]">
                    <Link to={`/movie/templates/${movie._id}`} key={index} className="ml-[45px] mt-10">
                    <Card 
                    name={movie.name}
                    imgsrc={movie.photo_location}
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
export default ComedianMovies;