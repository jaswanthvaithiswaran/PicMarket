import React,{useState,useEffect} from 'react';
import Base from '../core/Base';
import Card from "../Home/Card";
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

        <Base className="bg-grey-700">
        <div className="grid grid-cols-4 ">
          {templates.map((template,index)=>{
              return(
                  <div className="ml-[45px] mr-[45px] mt-[40px]">
                    <a download={template.name} href={template.photo_location} >
                  <Card 
                  className="ml-[45px] mt-10"
                  name={template.name}
                  imgsrc={template.photo_location}
                  
                  key={index}
                  />
                  </a>
                  </div>
                  
              )
          })}
        </div>
      </Base>        
    )
}
export default DailyUploads;