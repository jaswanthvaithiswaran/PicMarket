import React from "react"
import Base from "../core/Base";
const CreateComedian = ()=>{

    const createComedianForm = ()=>{
        return (
            <div className="grid grid-cols-3 gap-7 mt-20 mb-20">
            <div ></div>

            <div className="bg-slate-100  rounded-lg shadow-lg">

                <div className=" text-3xl text-black  text-center mt-4">
                    CreateComedian form
                </div>

                <div class="mb-4 ml-8 mt-10">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="moviename">
                       Comedian name
                    </label>
                    <input type="text" placeholder="Comedian name" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow  focus:outline-none focus:ring  w-3/4 pr-10"/>
                </div>

                <div class="mb-4 ml-8 ">
                <label class="block">
                    <label className="text-gray-700 test-sm font-bold mb-2">Comedian picture </label>

                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "/>
                </label>
                </div>

                
                <div className="mb-4 ml-80 mt-10 ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Submit</button>
                </div>
               
            </div>

            <div></div>
        </div>
        )
    }

    return(
        <Base>
        {createComedianForm()}
        </Base>
    )
}
export default CreateComedian;