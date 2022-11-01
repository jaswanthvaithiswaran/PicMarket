import React,{useEffect,useState} from "react";
import { isAuthenticated } from "../Auth/authapicalls";
import { getActors } from "../Actor/actorapicalls";
import { getComedians } from "../Comedian/comedianapicalls";
import Base from "../core/Base";
import { createMovies } from "./movieapicalls";
import Autocomplete  from "../core/AutoComplete";


const CreateMovie = () => {
    var ActorMap = new Map();
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
        actorName:""
        
    });
    const [comedianValues, setComedianValues] = useState([1]);

    const [actors,setActors] = useState([]);
    const [comedians,setComedians]= useState([]);

    const {name,photo,actorerror,comedianerror,formData,error,successClass,savedmovie,actorName} = values;
    


    const ActorName = name=>{
        setValues(values=>({...values,actorName:name}));
        console.log(actorName);
    }

    
    const handleChange = name =>event=>{
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        setValues({...values,[name]:value});
        formData.set(name,value);

    }

    

   
    
    
    useEffect(()=>{
        const loadActors = () => {
            getActors()
            .then(data => {
                if (data.error) {
                    setValues(values=>({...values,actorerror:data.error}));
                } else {
                  setActors(data);
                }
                
            })
        }
        loadActors();
        

    },[]);
    useEffect(()=>{
        const loadComedians = () => {
            getComedians()
            .then(data => {
                if (data.error) {
                    setValues(values=>({ ...values, comedianerror: data.error }));
                } else {
                    
                   setComedians(data);
                   
                }
            })
        }
        loadComedians();
        
    },[]);
    useEffect(()=>{
        
        const MapActors = () => {
        
            actors.forEach((actor) => {
                ActorMap.set(actor.name,actor._id);
              
            });
            console.log(ActorMap);
           
        }
        MapActors();
        
    },[actors]);
  
    const handleSubmit = event => {
       event.preventDefault();
       console.log("submitted");
       console.log(typeof(actorName));
       console.log(ActorMap.has('Vijaykanth'));
        formData.set("_actorId",ActorMap.get(actorName));
       for(let key of formData.entries())
       {
           console.log(key[0]+":"+key[1]);
       }
       
       /*createMovies(user._id,token,formData)
       .then(data=>{
           if(data.error)
           {
                setValues({...values,error:data.error})
           }
           else{
               setValues({...values,name:"",photo:"",error:"",actorerror:"",comedianerror:"",formData:new FormData(),savedmovie:data.name,
                successClass:"block text-2xl text-black place-content-center mt-10"})
           }
       })*/
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

    const addComedianInput = event=>{
        event.preventDefault();
        let newComedianValues = [...comedianValues];
        newComedianValues.push(1);
        setComedianValues(newComedianValues);
    }

    const removeComedianField = (index)=>event=>{
        event.preventDefault();
        let newComedianValues = [...comedianValues];
        newComedianValues.splice(index, 1);
        setComedianValues(newComedianValues)
        formData.set("comedian",newComedianValues);
    }
    
    const handleComedianChange = index=>event=>{
        let newComedianValues = [...comedianValues];
        newComedianValues.pop();
        newComedianValues.push(event.target.value);
        setComedianValues(newComedianValues);
        formData.set("comedian",newComedianValues);
    }

    const createMovieForm = () => {
        return(
           
           

                <div className="grid lg:grid-cols-3   gap-7 mt-20 mb-20">
                     
                   <div></div>
                  
                    <div className=" bg-[#DAD4FE] rounded-lg shadow-2xl">

                        <div className=" text-3xl text-black  text-center mt-4">
                            AddMovie form
                        </div>
                        <form onSubmit={handleSubmit} >
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
                            <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" > actor </label>
                            <Autocomplete suggestions={actors} getData={ActorName}/>
                        </div>
                       
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-8 capitalize" > comedians </label>
                        
                        {comedianValues.map((element,index)=>{
                            return(
                             <div className="mb-4 ml-8 flex" key={index}>
                                <input list="comedian" placeholder="Comedian name/ _id" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow  focus:outline-none focus:ring  w-3/4 pr-10" onChange={handleComedianChange(index)}></input>
                                {
                                index ? 
                                <button type="button"  className="rounded-lg bg-red-500 hover:bg-red-600 p-1 ml-2" onClick={removeComedianField(index)}>Remove</button> 
                                : null
                                 }
                            </div>
                            )
                        })}

                        <p className="text-gray-700 text-sm mb-4 ml-8 mt-2 capitalize">. comedian name will be auto populated with comedian id</p>
                        <datalist id="comedian">
                             {comedians.map((comedian,index)=>{
                                 return(
                                     <option key={index} value={comedian._id}>{comedian.name}</option>
                                 )
                             }
                             )}
                        </datalist>
                       
                        

                        <div className="mb-4 float-right flex">
                            <button className="bg-blue-600 text-white p-2  rounded-lg hover:bg-blue-700 flex" onClick={addComedianInput}>Add comedian</button>
                        </div>
                        
                        <center>
                        <div className="mb-4  mt-10 ">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit" >Submit</button>
                        </div>
                        </center>
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