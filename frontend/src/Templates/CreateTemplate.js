import React,{useState,useEffect} from "react";
import { isAuthenticated } from "../Auth/authapicalls";
import Base from "../core/Base";
import { getMovies } from "../Movies/movieapicalls";
import { createTemplate } from "./templateapicalls";


const CreateTemplate = () => {

   const  {user,token} = isAuthenticated();
   const [values, setValues] = useState({
        movie: "",
        photo:"",
        formData:new FormData(),
        error: "",
        success:false,
        successClass:"hidden text-2xl text-black place-content-center mt-10",
        errorMessageclass:"hidden text-2xl text-black place-content-center"
    });
    const [movies, setMovies] = useState([]);
    const {photo,formData,error,successClass,errorMessageclass} = values;


    const handleChange =name=>event=>{
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name,value);
        setValues({...values, [name]: value});
    }

    const loadMovies=()=>{
        getMovies()
        .then(data=>{
            if(data.error){
                setValues({...values, error: data.error})
            }
            else{
                setMovies(data);
                console.log(data);
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        loadMovies();
    },[])

    const onSubmit = event=>{
        event.preventDefault();
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
        createTemplate(user._id,token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values, error: data.error,errorMessageclass:"text-2xl text-black place-content-center",formData:new FormData()})
            }
            else{
                setValues({...values, success:true,successClass:"block text-2xl text-black place-content-center mt-10"});
            }
        })
    }

    
    const showSuccess = ()=>{
        return(
            <center>
            <div className={successClass}>
            <h4>Template is added successfully</h4>
            </div>
            </center>
        )
    }
    const showError = ()=>{
        return(
            <center className="mt-10">
            <div className={errorMessageclass}>
            <h4>{error}</h4>
            
        </div>
        </center>
            
        )
    }


    const createTemplateForm = ()=>{
        return(
            <div className="grid grid-cols-3 gap-7 mt-20 mb-20">
                    <div ></div>

                    <div className="bg-slate-100  rounded-lg shadow-lg">

                        <div className=" text-3xl text-black  text-center mt-4 ">
                            Add Template 
                        </div>

                        

                        <div className="mb-4 ml-8 mt-10">
                        <label className="block">
                            <label className="text-gray-700 test-sm font-bold mb-2">Template picture </label>
    
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "
                            onChange={handleChange("photo")}
                            />
                        </label>
                        </div>

                       

                        <div className="mb-4 ml-8">
                            <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" > movie </label>
                            <select name="" onChange={handleChange("movie")} className="p-2 bg-white relative rounded text-sm w-3/4">
                                <option value="">Select movie</option>
                                {movies.map((movie,index)=>{
                                    return(
                                        <option key={index} value={movie._id}>{movie.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="mb-4 ml-80 mt-10 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={onSubmit}>Submit</button>
                        </div>
                       
                    </div>

                    <div></div>
                </div>
        )
    }


    return(
        <Base>
        {showError()}
        {showSuccess()}
        {createTemplateForm()}
        </Base>
    )
}
export default CreateTemplate;