// auth 관련 API 함수

import API from './api';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// 회원가입
export const register = async (name: string, email: string, password: string): Promise<User> => {
  const res = await API.post('/auth/register', { name, email, password });
  return res.data.user;
};

// 로그인
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await API.post('/auth/login', { email, password });
  return res.data;
};

// 내 정보 가져오기
export const getMe = async (): Promise<User> => {
  const res = await API.get('/auth/me');
  return res.data.user;
};