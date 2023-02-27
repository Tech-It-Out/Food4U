import axios from 'axios'
import config from "../config";

function getProductsFromApi () {
  return axios.get(config.apiUrl + '/products')
}

export {
  getProductsFromApi
}
