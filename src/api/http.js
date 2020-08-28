import axios from 'axios';

import {config} from '../config/constants';
console.log(config.apiUrl, 'url');
const instance = axios.create({
  baseURL: config.apiUrl,
});

export default instance;
