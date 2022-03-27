import React from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
const AdminDashboard = ()=>{

    const dashboardForm = ()=>{
        return(
            <div className="mt-20 ml-30 grid grid-cols-5 gap-10">
                
                <div></div>
                    <div className="grid grid-rows-5 grid-flow-col gap-4">
                        <div className="col-span-1 capitalize  bg-green-700 rounded-lg text-center p-3">Create</div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/movies/create" className="text-blue-500">Movies</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/actor/create" className="text-blue-500">actor</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/comedian/create" className="text-blue-500">comedian</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/templates/create" className="text-blue-500">templates</Link>
                        </div>
                    </div>
                
                
                    <div className="grid grid-rows-5 grid-flow-col gap-4">
                        <div className="col-span-1 capitalize  bg-yellow-700 rounded-lg text-center p-3">update</div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/movies/update" className="text-violet-700">Movies</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/actor/update" className="text-violet-700">actor</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/comedian/update" className="text-violet-700">comedian</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/templates/update" className="text-violet-700">templates</Link>
                        </div>
                    </div>
               
                    <div className="grid grid-rows-5 grid-flow-col gap-4">
                        <div className="col-span-1 capitalize  bg-red-700 rounded-lg text-center p-3">delete</div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/movies/delete" className="text-red-700">Movies</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/actor/delete" className="text-red-700">actor</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/comedian/delete" className="text-red-700">comedian</Link>
                        </div>
                        <div className="col-span-1 capitalize text-center rounded-lg p-3 bg-gray-100">
                            <Link to="/templates/delete" className="text-red-700">templates</Link>
                        </div>
                    </div>
                <div></div>
            </div>
        )
    }
    return(

        
           <Base>
           <h1 className="text-black text-center text-3xl mt-5">Welcome to admin dashboard</h1>

            {dashboardForm()}
           </Base> 
    )
}
export default AdminDashboard;