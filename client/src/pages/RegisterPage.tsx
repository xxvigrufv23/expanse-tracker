import React, { useState } from 'react';
import { register } from '../services/auth';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await register(name, email, password);
      alert(`회원가입 성공! 환영합니다 ${user.name}`);
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>회원가입</h1>
      <div>
        <input 
          type="text" 
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
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
      <button type="submit">회원가입</button>
    </form>
  );
};

export default RegisterPage;