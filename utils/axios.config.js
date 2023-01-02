import axios from "axios";

const api = axios.create({
  baseURL: "https://challenge.webjar.ir",
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //? handle common errors
    // console.log(error);
    
    //* handle network error
    if(error.code === "ERR_NETWORK") console.log('Network error');

    return Promise.reject(error);
  }
);

export default api;
