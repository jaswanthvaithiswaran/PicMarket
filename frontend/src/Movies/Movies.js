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
    const [movieInput,setMovieInput] = useState("");

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

    const handleChange = name=>event=>{
        setMovieInput(event.target.value);
    }

    return(
        
            <Base className="bg-grey-700">
                <div className="searchgrid sm:grid sm:grid-cols-3">
                    <div></div>
                    <div className="searchbar mt-2 flex ml-9 ">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-[200px] md:w-60 md:h-10 px-5 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search movies" aria-label="Search" aria-describedby="button-addon2" onChange={handleChange("moviename")}/>
                        <button className="btn md:ml-2 md:h-10 px-4 py-1 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                        </button>
                    </div>
                    <div></div>
                </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movieInput===""?
        movies.map((movie,index)=>{
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
        }) :movies.map((movie,index)=>{
            
           let stringmatch = movie.name.toLowerCase().search(movieInput);
           
           if(stringmatch!==-1)
           {
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
           }
            
        })
        }  
        
      </div>
            
        
      </Base>
       
    )
}
export default Movies;