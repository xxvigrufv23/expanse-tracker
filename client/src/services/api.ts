// axios 인스턴스 만들기 (공통 API 세팅)
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // 백엔드 주소
});

// 요청 전에 토큰 추가 (로그인 이후 사용)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;