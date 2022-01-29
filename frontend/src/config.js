import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:"https://locate-pin.herokuapp.com/api/",
});