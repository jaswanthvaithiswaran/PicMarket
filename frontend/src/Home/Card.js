import React from "react";
import "./card.css";
const Card =({
  name="",
  keywords=[],
  imgsrc="",
  classname="",
  cardtitle="",
})=>{
  
    return(
        <div className={classname}>
        <div className="cards-list">
  
            <div className="card 1">
            <div className="card_image"> <img src={imgsrc} /> </div>
            <div className="bg">
            <div className={cardtitle}>
                <p>{name}</p>
            </div>
            </div>
        </div>
        </div>


</div>
    )
}
export default Card;