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
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie,index)=>{
            return(
              <div className="ml-[45px] mr-[45px]" key={index} >
                <Link to={`/movie/templates/${movie._id}`} className="">
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
export default Movies;