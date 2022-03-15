
export const getContents = ()=>{
    return fetch('HomeContent.json',{
            headers:{
                "content-type":"application/json",
                "application":"application/json"
            }
    })
    .then((response)=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}