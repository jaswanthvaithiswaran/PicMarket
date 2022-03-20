import {useState} from "react";

import Base from "../core/Base";
import { signup } from "./helper/authapicalls";

const Signup = ()=>{

    const [values,setValues]=  useState(
        {
            name:"",
            password:"",
            email:"",
            error:"",
            success:false,
            displayblock:"block",
            displayhidden:"hidden",
            passwordmatch:true,
           
        }
    )
    const {name,password,email,error,success,displayblock,displayhidden,passwordmatch} = values;
    const handleChange = name=>event=>{
        setValues({...values,error:false,[name]:event.target.value});
        
    }

    
    //TODO: confirm password bug
    const handlechangeconfirmpassword= name=>event=>{
      
        if(event.target.value!==password)
       {
          setValues({...values,passwordmatch:false})
       }
       else
       {
           setValues({...values,passwordmatch:true})
       }
      
        
    }


    const errorMessage = ()=>{
        return (
            <div className={error?displayblock:displayhidden}>
                <div className="w-1/3"></div>
                <div className="w-1/3 text-xl text-red-700">
                Failed to create user
                </div>
                <div className="w-1/3"></div>
               
            </div>
        )
    }

    const successMessage = ()=>{
        return(
            <div className={success?displayblock:displayhidden}>
                <div className="w-1/3"></div>
                <div className="w-1/3 text-xl text-green-700">
                User creaction successfull
                </div>
                <div className="w-1/3"></div>
            </div>
        )
    }

    const onSubmit = event=>{
        event.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            if(data.error)
            {
                setValues({...values,error:data.error,success:false})
            }
            else
            {
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        })
        .catch(console.log("Error in signup"))

    }
    const signupform = ()=>{
        return(
           
            <div className="bg-grey-lighter min-h-screen flex flex-col shadow-lg">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                <input 
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    onChange={handleChange("name")}
                                    placeholder="Full Name"
                                    value={name}
                                     />
                                    
                                <input 
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    onChange={handleChange("email")}
                                    placeholder="Email"
                                    value={email}
                                     />
            
                                <input 
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    onChange={handleChange("password")}
                                    placeholder="Password" 
                                    value={password}
                                    />
                                <input 
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    onChange={handlechangeconfirmpassword("confirmpassword")}
                                    placeholder="Confirm Password" 
                                   
                                    />
                                  <div className={passwordmatch?displayhidden:displayblock}>
                                    password doesnot match
                                  </div>
                               
                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                                   onClick={onSubmit}
                                >Create Account</button>
            
                                <div className="text-gray-dark mt-6 bg-white text-center">
                                Already have an account? 
                                <a className="no-underline border-b border-blue text-blue-800 " href="/login">
                                    Log in
                                </a>.
                                

                            </div>
                              
                            </div>
            
                           
                        </div>
                       
                    </div>
                    

        )
    }
    

    return(
        <Base className="bg-gray-100">
        {errorMessage()}
        {successMessage()}
        {errorMessage()}
        {signupform()}
        
        </Base>
    )
}

export default Signup;