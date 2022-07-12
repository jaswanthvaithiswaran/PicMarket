import React,{useState,useEffect} from 'react';
import Base from '../core/Base';
import TemplateCard from "../Home/TemplateCard";
import { getDailyUploads } from './dailyuploadsapi';

const DailyUploads = () => {

    const [templates,setTemplates] = useState([]);
    const [error,setError] = useState(false);

   const  loadDailyUploads = ()=>{
        getDailyUploads()
        .then(data => {
            if(data.error)
            {
                setError(data.error);
            }
            else{
                setTemplates(data);
            }
        })
    }
    useEffect(()=>{
        loadDailyUploads();
    },[]);
    return(

        <Base className="bg-grey-700 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {templates.map((template,index)=>{
              return(
                  <div className="ml-[45px] mr-[45px] mt-[40px]" key={index}>
                   
                  <TemplateCard 
                  className="ml-[45px] mt-10"
                  name={template.name}
                  imgsrc={template.photo_location}
                  index={index}
                  />
                  
                  </div>
                  
              )
          })}
        </div>
      </Base>        
    )
}
export default DailyUploads;