import axios from 'axios';
import { getAuthToken } from './auth'; // 토큰을 가져오는 함수

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

// 요청 인터셉터 설정
api.interceptors.request.use(
    config => {
        const token = getAuthToken(); // 항상 최신 토큰을 가져옴
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;