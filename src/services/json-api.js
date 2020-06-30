import axios from 'axios';

const jsonAPI = axios.create({
  baseURL: 'https://json-server-catalog-of-books.herokuapp.com/',
});

export default jsonAPI;
