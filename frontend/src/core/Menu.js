import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../Auth/authapicalls";



const Menu=({
  history
})=>{

  const logout = ()=>{
      signout(()=>{
        window.location.reload();
      })
  }
    return(
        
        <div className="flex bg-blue-800 ">
          <div className="w-1/3 h-14">
            <h1 className="text-white text-left text-3xl text-bold  ml-14 mt-2">
              <a href="/">Meme Templates</a>
            </h1>
          </div>
          <div className="w-2/3  h-14">
            <ul className="flex">
              <li className="mr-14 mt-3 ">
                <a href="/" className="text-bold text-white text-center hover:text-[#CAD5E2]">Home</a>
              </li>

              {!isAuthenticated()&& (
                 <li className="mr-14 mt-3">
                 <a href="/signup" className="text-bold text-white text-center hover:text-[#CAD5E2]">Signup</a>
               </li>
              )}
             
              {!isAuthenticated()&& (
                 <li className="mr-14 mt-3">
                 <a href="/signin" className="text-bold text-white text-center hover:text-[#CAD5E2]">Signin</a>
               </li>
              )}
             

              {isAuthenticated() && isAuthenticated().user.role===1 && (
                <li className="mr-14 mt-3">
                <Link to="/admin/dashboard" className="text-bold text-white text-center hover:text-[#CAD5E2]" >Admin Dashboard</Link>
               </li>
              )}
              
              {isAuthenticated()&& (
                <li className="mr-14 mt-3">
                <span className="text-bold text-white text-center hover:text-[#CAD5E2] cursor-pointer" onClick={logout}>Signout</span>
              </li>
              )}
             
              <li className=" flex ml-60 mt-2">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-5 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search templates" aria-label="Search" aria-describedby="button-addon2"/>
              <button class="btn px-4 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
              </li>
            </ul>
           
            <div class="flex justify-center">
  
          </div>
        </div>
       </div>
       
    )
}
export default Menu;