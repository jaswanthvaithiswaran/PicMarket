import Menu from "./Menu";
import React from "react";

const Base = ({
    className="",
    children
})=>{
    return(
        <>
        <Menu/>
        <div className={className}>
            {children}
        </div>
        
        </>
    )
}
export default Base;