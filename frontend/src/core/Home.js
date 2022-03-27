import React from "react";
import Card from "../Home/Card";
import Base from "../core/Base";
import {API} from "../backend";
const  Home=()=> {
  return (
    <Base className="bg-grey-700">
      <div>
        API:{API}
      </div>
      <div className="flex">
            <Card  name={"vadivel"}/>
      </div>
      
    </Base>
  )
}
export default Home;