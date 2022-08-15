import React,{useState,useEffect} from "react";
import {getTemplate} from "./templateapicalls";
const Template = ({match}) => {


    const [template,setTemplate] = useState();
    const [error,setError] = useState();
    const loadTemplate = (templateId) => {
        getTemplate(templateId)
        .then(data => {
            if(data.error)
            {
                setError(data.error);
                console.log(data.error);
            }
            else{
                setTemplate(data);
                console.log(data);
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        loadTemplate(match.params.templateId);
    },[]);

    return (
        <div>
            <h1>Template</h1>
            {error ? <div className="alert alert-danger">{error}</div> : null}
           {template?<><
            p>{template._id}</p>
           <img src={template.photo_location} alt="template" />
           <p>{template.movie.name}</p></>:null} 
            
        </div>
    );

}
export default Template;