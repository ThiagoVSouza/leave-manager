import axios from 'axios';

const api = axios.create({

    baseURL : "https://thiagoleavemanager.azurewebsites.net/",
    


})

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;