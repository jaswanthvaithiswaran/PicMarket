import React,{useEffect,useState} from "react";
import { isAuthenticated } from "../Auth/authapicalls";
import { getActors } from "../Actor/actorapicalls";
import { getComedians } from "../Comedian/comedianapicalls";
import Base from "../core/Base";
import { createMovies } from "./movieapicalls";
import Autocomplete  from "../core/AutoComplete";


const CreateMovie = () => {
    const [ActorMap,setActorMap] = useState(new Map());
    const [ComedianMap,setComedianMap] = useState(new Map());
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
        actorName:"",
        Actorerror:"",
        comedianName:[],
        Comedianerror:""
        
    });
    const [comedianValues, setComedianValues] = useState([1]);

    const [actors,setActors] = useState([]);
    const [comedians,setComedians]= useState([]);

    const {name,photo,Actorerror,comedianerror,formData,error,successClass,savedmovie,actorName,comedianName} = values;
    


    const ActorName = name=>{
        setValues(values=>({...values,actorName:name}));
       
    }

    const ComedianName = name=>{
        let comedians = comedianName;
        comedians.push(name);
        setValues(values=>({...values,comedianName:comedians}));
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
                
                let map = ActorMap;
                map.set(actor.name,actor._id);
                setActorMap(map);
              
            });
           
           
        }
        MapActors();
        
    },[actors]);
    useEffect(()=>{
        const MapComedians = () => {
            comedians.forEach((comedian)=>{
                let map = ComedianMap;
                map.set(comedian.name,comedian._id);
                setComedianMap(map);
            })
        }
        MapComedians();
    },[comedians])
  
    const handleSubmit = event => {
       event.preventDefault();
        if(ActorMap.has(actorName)){
        formData.set("actor",ActorMap.get(actorName));
        }
        else{
            setValues(values=>({...values,Actorerror:"Enter a valid Actor Name from drop down"}));
            return;
        }
        if(comedianName.length>0){
            let comedianId = [];
            comedianName.forEach((name)=>{
                if(ComedianMap.has(name)){
                    comedianId.push(ComedianMap.get(name));
                }
                else{
                    setValues(values=>({...values,Comedianerror:"Enter a valid Comedian Name from drop down"}));
                    return;
                }
            })
            formData.set("comedian",comedianId);
        }

       for(let key of formData.entries())
       {
           console.log(key[0]+":"+key[1]);
       }
       
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
                            <Autocomplete suggestions={actors} getData={ActorName} placeholder="Actor Name"/>
                        </div>
                       {Actorerror && <div className="text-red-500 bold ml-8">{Actorerror}</div>}
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-8 capitalize" > comedians </label>
                        
                        {comedianValues.map((element,index)=>{
                            return(
                             <div className="mb-4 ml-8 " key={index}>
                                <Autocomplete suggestions={comedians} getData={ComedianName} placeholder="Comedian Name"/>
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