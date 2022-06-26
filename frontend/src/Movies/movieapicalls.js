import {API} from "../backend";

export const createMovies = (userId, token, movie) => {
    return fetch(`${API}/movie/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: movie
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getMovies = () => {
    return fetch(`${API}/movies/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

export const getMovieTemplates = (movieId) => {
    return fetch(`${API}/movie/templates/${movieId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}