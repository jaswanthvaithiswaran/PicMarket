import React,{useState,useEffect,lazy} from "react";
import Menu from "./Home/Menu";
import Card from "./Home/Card";
import { getContents } from "./Apicalls/imagehelperapi";
const  Home=()=> {
  const [pics,setPics]= useState("");
  const [error,setError] = useState("");
  const [contents,setContents] = useState("")
  
   
    const loadcontent = ()=>{
      getContents().then(data=>{
        if(data)
        {
          setContents(data);
          console.log(data);
        }
      })
    }
    useEffect(()=>{
      loadcontent();
    },[]);

  return (
    <>
    <Menu/>

    <div className="flex">
      
          <Card  name={"vadivel"}/>
        
    </div>
    </>
  )
}
export default Home;