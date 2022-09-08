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
            <a download={imgsrc} href={imgsrc}>
            <div className="Templatecard 1">
            <div className="Templatecard_image"> <img src={imgsrc} /> </div>
            <div className="bg">
            </div>
            
        </div>
        </a>
        </div>
        </div>


    )
}
export default TemplateCard;