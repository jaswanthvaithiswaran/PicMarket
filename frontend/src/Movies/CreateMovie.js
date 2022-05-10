import React,{useEffect,useState} from "react";
import { isAuthenticated } from "../Auth/authapicalls";
import { getActors } from "../Actor/actorapicalls";
import { getComedians } from "../Comedian/comedianapicalls";
import Base from "../core/Base";
import { createMovies } from "./movieapicalls";


const CreateMovie = () => {

    const {user,token} = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        photo:"",
        actorerror:"",
        comedianerror:"",
        formData:new FormData(),
        error:"",
        savedmovie:"",
        successClass:"hidden text-2xl text-black place-content-center mt-10",
        
    });
    const [actors,setActors] = useState([]);
    const [comedians,setComedians]= useState([]);

    const {name,photo,actorerror,comedianerror,formData,error,successClass,savedmovie} = values;
    


    

    
    const handleChange = name =>event=>{
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        setValues({...values,[name]:value});
        formData.set(name,value);

    }

    

    const loadActors = () => {
        getActors()
        .then(data => {
            if (data.error) {
                setValues({ ...values, actorerror: data.error });
            } else {
              setActors(data);
            }
            
        })
    }
    const loadComedians = () => {
        getComedians()
        .then(data => {
            if (data.error) {
                setValues({ ...values, comedianerror: data.error });
            } else {
                
               setComedians(data);
               
            }
        })
    }
    useEffect(()=>{
        loadActors();
        

    },[]);
    useEffect(()=>{
        loadComedians();
        
    },[]);
   
  
    const onSubmit = event => {
       event.preventDefault();
       console.log("submitted");
       createMovies(user._id,token,formData)
       .then(data=>{
           if(data.error)
           {
                setValues({...values,error:data.error})
           }
           else{
               setValues({...values,name:"",photo:"",error:"",actorerror:"",comedianerror:"",formData:new FormData(),savedmovie:data.name,
                successClass:"block text-2xl text-black place-content-center mt-10"})
           }
       })
    }

    const successMessage = ()=>{
        return(
            <center>
            <div className={successClass}>
            <h4>{savedmovie} is added successfully</h4>
            </div>
            </center>
        )
    }

 

    const createMovieForm = () => {
        return(
           
            

                <div className="grid grid-cols-3 gap-7 mt-20 mb-20">
                    <div ></div>

                    <div className="bg-slate-100  rounded-lg shadow-lg">

                        <div className=" text-3xl text-black  text-center mt-4">
                            CreateMovie form
                        </div>
                        <form>
                        <div className="mb-4 ml-8 mt-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Movie name
                            </label>
                            <input type="text" placeholder="Movie name" value={name} onChange={handleChange("name")} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow  focus:outline-none focus:ring  w-3/4 pr-10"/>
                        </div>

                        <div className="mb-4 ml-8 ">
                        <label className="block">
                            <label className="text-gray-700 test-sm font-bold mb-2">Movie picture </label>
    
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "
                            name="photo"
                            onChange={handleChange("photo")}
                            />
                        </label>
                        </div>

                        <div className="mb-4 ml-8">
                            <label className="block text-gray-700 text-sm font-bold mb-2" > Actor </label>
                            <select name="comedian" className="p-2 bg-white relative rounded text-sm w-3/4" onChange={handleChange("actor")}>
                                <option value="">Select Actor</option>
                                {actors && actors.map((actor, index) => {
                                    return (
                                        <option key={index} value={actor._id}>{actor.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="mb-4 ml-8 comedians">
                            <div className="comedian">
                            <label className="block text-gray-700 text-sm font-bold mb-2" > Comedian </label>
                            <select name="comedian" className="p-2 bg-white relative rounded text-sm w-3/4" onChange={handleChange("comedian")}>
                                <option value="">Select comedian</option>
                                {comedians && comedians.map((comedian, index) => {
                                    return (
                                        <option key={index} value={comedian._id}>{comedian.name}</option>
                                    )
                                })}
                            </select>
                            </div>
                        </div>

                      

                        <div className="mb-4 ml-80 mt-10 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={onSubmit}>Submit</button>
                        </div>
                        </form>
                       
                    </div>

                    <div></div>
                </div>
        )
    }
    return(
        <Base>
        {successMessage()}
       {createMovieForm()}
       </Base>
    )
}
export default CreateMovie;