import axios from 'axios';

export default axios.create({
  baseURL: 'https://apitest.kerjoo.com/api/v1/'
})