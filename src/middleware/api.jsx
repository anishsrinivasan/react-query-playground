import axios from 'axios';
import LocalStorageServices from '../services/localStorageServices';

const API = axios.create({
  baseURL: `${config.baseURL}`,
  headers: { authorization: LocalStorageServices.getAccessToken() }
});

API.interceptors.response.use(
  function(response) {
    const { code, msg } = response.data;
    if (code === 200) {
      return response;
    } else {
      throw Error(`${msg}`);
    }
  },
  function(error) {
    throw Error(error);
  }
);

export default API;
