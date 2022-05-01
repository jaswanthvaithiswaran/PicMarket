import React from "react";

const Card =({
  name="",
  keywords=[],
  imgsrc="",
})=>{
  
    return(
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg m-10 max-h-56  ">
          
          <div className="px-4 py-2 text-center">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <img className=" w-full rounded-lg" src={imgsrc} alt="loading...." />
        
        
        <div className="px-6 pt-4 pb-2">
          {keywords.map((keyword,index)=>{
            return(
              <span key={index} className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{keyword}</span>
            )
          })}
          
        </div>

      </div>
    )
}
export default Card;