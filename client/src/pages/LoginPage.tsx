import React, { useState } from 'react';
import { login } from '../services/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.token);
      alert(`로그인 성공! 환영합니다 ${res.user.name}`);
    } catch (error) {
      console.error(error);
      alert('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>로그인</h1>
      <div>
        <input 
          type="email" 
          placeholder="이메일" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginPage;