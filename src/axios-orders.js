import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://burger-builder-dd051-default-rtdb.firebaseio.com'
})

export default axiosInstance;