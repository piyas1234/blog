import axios from "axios";

const Api = axios.create({
    baseURL: 'https://gentle-spire-93271.herokuapp.com/',
    
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Api;