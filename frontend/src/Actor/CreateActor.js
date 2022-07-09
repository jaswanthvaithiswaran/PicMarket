import React,{useState} from "react";
import { isAuthenticated } from "../Auth/authapicalls";
import Base from "../core/Base";
import { createActor } from "./actorapicalls";

const CreateActor = ()=>{

    const {user,token} = isAuthenticated();

    const [values,setValues] = useState({
        name:"",
        photo:"",
        formData:new FormData(),
        AddedActor:"",
        error:"",
        successMessageclass:"hidden text-2xl text-black place-content-center",
        errorMessageclass:"hidden text-2xl text-black place-content-center"
    });

    const {name,formData,AddedActor,successMessageclass,error,errorMessageclass} = values;
    const onSubmit = event=>{
        event.preventDefault();
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
        createActor(user._id,token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,name:"",photo:"",errorMessageclass:"text-2xl text-black place-content-center",formData:new FormData()});
            }
            else{
                setValues({...values,AddedActor:data.name,successMessageclass:"text-2xl text-black place-content-center",formData:new FormData(),name:"",photo:""});
            }
        })
    }

   
   
    const handleChange = name => event => {
        const value = name ==="photo" ? event.target.files[0]: event.target.value;
        formData.set(name,value);
        setValues({...values,[name]:value});
    }

    const showSuccess = ()=>{
        return(
            <center className="mt-10">
            <div className={successMessageclass}>
            <h4>{AddedActor} is added successfully</h4>
            
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
    const createActorForm = ()=>{
        return(
            <div className="grid grid-cols-3 gap-7 mt-20 mb-20">
            <div ></div>

            <div className="bg-slate-100  rounded-lg shadow-lg">

                <div className=" text-3xl text-black  text-center mt-4">
                    AddActor form
                </div>

                <form >

                <div className="mb-4 ml-8 mt-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                       Actor name
                    </label>
                    <input type="text" placeholder="Actor name" accept ="image" onChange={handleChange("name")} value={name} name="name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow  focus:outline-none focus:ring  w-3/4 pr-10"/>
                </div>

                <div className="mb-4 ml-8 ">
                <label className="block">
                    <label className="text-gray-700 test-sm font-bold mb-2">Actor picture </label>

                    <span className="sr-only">Choose profile photo</span>
                    <input type="file" className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "
                    name="photo"
                    accept="image"
                    placeholder="Choose a actor photo"
                    onChange={handleChange("photo")}
                    />
                </label>
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
    return (
        <Base>
            {showSuccess()}
            {showError()}
            {createActorForm()}
        </Base>
    )
}
export default CreateActor;