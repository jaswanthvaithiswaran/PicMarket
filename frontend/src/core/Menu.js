import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../Auth/authapicalls";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Menu=({
  history
})=>{

  

    return(
      <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="">
        <div className="flex ">
         
          <div className="   text-center md:w-2/4 h-12">
            <h1 className="text-black text-left text-md md:text-3xl text-bold  ml-6 mt-2">
              <Link to="/">Meme templates</Link>
            </h1>
          </div>
          
         
          <div className="hidden h-8   md:h-14  md:block">
            
            <ul className="flex">
            
              <li className="mr-14 mt-2 py-1 px-3  hover:text-blue-700 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
             
                <Link to="/" className=" text-center">
                <FontAwesomeIcon icon="fa-solid fa-house" className="mr-3"/>
                  Home</Link>
              </li>

              {!isAuthenticated()&& (
                <Fragment>
                 <li className="mr-14 mt-2 py-1 px-3 hover:text-blue-700 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                 
                  <Link to="/signin" className="text-bold  text-center ">
                  <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className="mr-3" />
                    Login/Signup</Link>
                </li>
                  </Fragment>
              )}
             
             

              {isAuthenticated() && isAuthenticated().user.role===1 && (
                <li className="mr-14 mt-2 py-1 px-3 hover:text-blue-700 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                
                <Link to="/admin/dashboard" className="text-bold  text-center " >
                <FontAwesomeIcon icon="fa-solid fa-circle-user" className="mr-2"/>
                  Admin Dashboard</Link>
               </li>
              )}
              
              {isAuthenticated()&& (
                <li className="mr-14 mt-2 py-1 px-3 hover:text-blue-700 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
               
                <span className="text-bold text-center cursor-pointer" onClick={()=>{
                  signout(()=>{
                    console.log("ready to redirect");
                    window.location.reload();
                  })
                }}>
                   <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className="mr-2"/>
                  Signout</span>
              </li>
              )}
             
              
            </ul>
        </div>
        
       </div>
       </div>
       </div>
    )
}
export default Menu;