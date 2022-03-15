import React from "react";

const Card =({
  name="",
  keywords=[],
  imgsrc="",
})=>{
  
    return(
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg m-10 ">
        <img className="w-full" src={imgsrc} alt="Sunset in the mountains"/>
        <div className="bg-card">
        <div className="px-4 py-2 text-center">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vadivel</span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#template</span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vanakam</span>
        </div>
        </div>
      </div>
    )
}
export default Card;