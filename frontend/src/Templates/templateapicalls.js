import {API} from "../backend";

export const createTemplate = (userId, token, template) => {
    return fetch(`${API}/template/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: template
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getTemplate= id=>{
    return fetch(`${API}/template/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    }).catch(err => console.log(err));
}