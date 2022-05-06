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