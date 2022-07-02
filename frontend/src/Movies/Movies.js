import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Card from "../Home/Card";
import { getMovies } from "./movieapicalls";


const Movies = ()=>{

    const [movies,setMovies] = useState([]);
    const [values,setValues] = useState({
        movieerror:""
    });

    const loadMovies = () => {
        getMovies()
        .then(data => {
            if (data.error) {
                setValues({ ...values, movieerror: data.error });
            } else {
                setMovies(data);
            }
        })
    }
    useEffect(()=>{
        loadMovies();
    },[]);

    return(
        
            <Base className="bg-grey-700">
         <div className="grid grid-cols-4">
        {movies.map((movie,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]">
                <Link to={`/movie/templates/${movie._id}`} key={index} className="">
                <Card 
                name={movie.name}
                imgsrc={movie.photo_location}
                
                />
                </Link>
                </div>
            )
        })}
      </div>
            
        
      </Base>
       
    )
}
export default Movies;