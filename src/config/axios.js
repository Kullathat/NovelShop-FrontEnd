import axios from 'axios';
import { BACKEND_URL} from './env'
import { getAccessToken } from '../utils/token-storage';

//set axios เข้ามา
axios.defaults.baseURL = BACKEND_URL

axios.interceptors.request.use((config) => {
    const token = getAccessToken;
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

//axios interceptors
export default axios