import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getComedianMovies } from "./comedianapicalls";
import Base from "../core/Base";
import Card from "../Home/Card";

const ComedianMovies =({match})=>{

    const [movies,setMovies] = useState([]);
    const [values,setValues] = useState({
        error:""
    })
    const {error} = values;
    const loadComedianMovies = (comedianId)=>{
        getComedianMovies(comedianId)
        .then(data => {
            if(data.error)
            {
                setValues({...values,error:data.error})
                console.log(data.error);
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
        <div className="flex">
          {movies.map((movie,index)=>{
              return(
                  <Link to={`/comedian/templates/${movie._id}`} key={index}>
                  <Card 
                  name={movie.name}
                  imgsrc={movie.imgsrc}
                  />
                  </Link>
              )
          })}
        </div>
        
      </Base>
    )
}
export default ComedianMovies;