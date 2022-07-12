import React from "react";
import "./Templatecard.css";
const TemplateCard =({
  
  keywords=[],
  imgsrc="",
  classname="",
    index="",
})=>{
  

    const DownloadImage =event=>{
        console.log(event.target.value);
    }

    return(
        <div className={classname}>
        <div className="Templatecards-list">
  
            <div className="Templatecard 1">
            <div className="Templatecard_image"> <img src={imgsrc} /> </div>
            <div className="bg">
            <div className="download">
                <center>
                 <a href={imgsrc} download="template.png" id={index} onClick={DownloadImage} >
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" value={imgsrc}  >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download</span>
               
                </button>
                </a>
                </center>
            </div>
            </div>
        </div>
        </div>
        </div>


    )
}
export default TemplateCard;