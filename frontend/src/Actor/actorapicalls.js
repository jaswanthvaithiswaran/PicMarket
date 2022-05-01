import {API} from "../backend";


export const createActor = (userId,token,actor)=>{

    return fetch(`${API}/actor/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body: actor
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=> console.log(err));

}