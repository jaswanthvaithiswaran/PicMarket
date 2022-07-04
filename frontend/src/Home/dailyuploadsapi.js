import {API} from "../backend";
export const getDailyUploads = () => {
    return fetch(`${API}/dailyuploads`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    })
    .then(response=>{
        return response.json();
    })
}