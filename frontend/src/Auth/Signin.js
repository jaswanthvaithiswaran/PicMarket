import React,{useState} from "react";
import { Redirect,Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Base from "../core/Base";
import { signin,authenticate, isAuthenticated } from "./authapicalls";
const Signin = ()=>{
    
    const [values,setValues] = useState({
        email:"jaswanthvaithiswaran@gmail.com",
        password:"12345678",
        error:"",
        didRedirect:false
    })

    const {email,password,didRedirect,error} = values;

    const handleChange = name=>event=>{
        setValues({...values,[name]:event.target.value});
    }

    const {user} = isAuthenticated();


    const onSubmit = event=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            console.log(data);
            if(data.error)
            {
                setValues({...values,error:data.error});
            }
            else
            {
                authenticate(data,()=>{
                    setValues({...values,didRedirect:true})
                })
            }
        
        })
        .catch(err=>console.log(err));
    }
    const performRedirect = ()=>{
        if(didRedirect)
        {
            if(user && user.role===1)
            {
                return <Redirect to="/admin/dashboard"/>
            }
            else if (user)
            {
                return <Redirect to ="/"/>
            }
        }
    }
    const signinform = ()=>{
        return(
           
            <div className="bg-grey-lighter min-h-screen flex flex-col shadow-lg">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Login</h1>
                                <div className="flex">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" className="mr-2 mt-1"/>
                                <label >Email</label>
                                </div>
                                <input 
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    onChange={handleChange("email")}
                                    placeholder="Email"
                                    value={email}
                                     />
                                <div className="flex">
                                <FontAwesomeIcon icon="fa-solid fa-key" className="mr-2 mt-1" />
                                <label >Password</label>
                                </div>
                                <input 
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    onChange={handleChange("password")}
                                    placeholder="Password" 
                                    value={password}
                                    />
                               
                               
                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                                    onClick={onSubmit}
                                >Sign in</button>
                                <p className="text-red-400 text-center">{error}</p>
                                <div className="additional flex mt-10">
                                <div className=" text-left space-x-2 text-blue-600 ">forgot password?</div>
                                <div className="text-right ml-[100px] text-blue-600 ">
                                <FontAwesomeIcon icon="fa-solid fa-user-plus" className="mr-2" />
                                    <Link to="/signup">Sign up</Link>
                                     </div>
                                </div>
                            </div>
                              
                            </div>
            
                           
                        </div>
                       
                   
                    

        )
    }
    
    return(
        <Base className="bg-gray-100">
        {signinform()}
        {performRedirect()}
        </Base>
    )
}
export default Signin;