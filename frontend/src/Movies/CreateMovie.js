import React from "react";
import Base from "../core/Base";


const CreateMovie = () => {


    const createMovieForm = () => {
        return(
           
            <div className="grid grid-rows-2 gap-10">
                <div>

                </div>
            <div className="grid grid-cols-3 gap-7  ">
                <div></div>
                <div className="text-black text-center text-3xl bg-slate-400 ">
                    Create movie
                    
                </div>
                <div></div>
            </div>
            </div>
            
            
        )
    }
    return(
        <Base>
       {createMovieForm()}
       </Base>
    )
}
export default CreateMovie;