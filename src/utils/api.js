import axios from "axios";

const baseurl = "";

const api = axios.create({
    baseurl,
    headers:{'Content-Type': 'application/json'},
});


api.interceptors.request.use(

    function(config){
        const token = localStorage.getItem("authToken");

        if(token){
            config.headers.Authorization = `Bearer${token}`
        }

        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)


api.interceptors.response.use(
    function(response){
        return response;
    },

    function(error){
        console.error("API error :", error?.response?.data || error?.message);
        return Promise.reject(error);
    }
)

export default api;