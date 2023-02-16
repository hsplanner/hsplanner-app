import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://hsplanner.herokuapp.com/'
  baseURL: 'https://hsplanner-tcc.herokuapp.com/'
})

export default api;
