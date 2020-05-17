import axios from 'axios';

const jsonAPI = axios.create({
  baseURL: 'http://localhost:3001',
});

export default jsonAPI;
