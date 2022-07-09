import React,{useState,useEffect} from "react";
import { getMovieTemplates } from "./movieapicalls";
import Base from "../core/Base";
import Card from "../Home/Card";

const MovieTemplates =({match})=>{

    const [templates,setTemplates] = useState([]);
    const [values,setValues] = useState({
        error:""
    })
    const {error} = values;
    const loadMovieTemplates = (movieId)=>{
        getMovieTemplates(movieId)
        .then(data => {
            if(data.error)
            {
                setValues({...values,error:data.error})
                console.log(data.error);
            }
            else{
                setTemplates(data);
                console.log(data);
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        loadMovieTemplates(match.params.movieId);
    },[]);
    return(
        <Base className="bg-grey-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {templates.map((template,index)=>{
              return(
                  <div className="ml-[45px] mr-[45px] mt-[40px]">
                    <a download={template.name} href={template.photo_location} >
                  <Card 
                  className="ml-[45px] mt-10"
                  name={template.name}
                  imgsrc={template.photo_location}
                  
                  key={index}
                  />
                  </a>
                  </div>
                  
              )
          })}
        </div>
      </Base>
    )
}
export default MovieTemplates;