import Menu from "./Menu";
import React, { Children } from "react";

const Base = ({
    children,
})=>{
    return(
        <>
        <Menu/>
        <div>
            {children}
        </div>
        </>
    )
}