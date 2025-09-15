const express = require('express');
const router = express.Router();

// 회원가입
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // ✨ DB 연결 전이니까 임시 응답!
  res.json({
    message: '회원가입 성공',
    user: { id: Date.now(), name, email }
  });
});

// 로그인
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // ✨ 실제로는 DB와 비밀번호 체크해야 하지만 지금은 임시 응답
  res.json({
    message: '로그인 성공',
    token: 'fake-jwt-token',
    user: { id: 1, name: '테스트유저', email }
  });
});

// 내 정보
router.get('/me', (req, res) => {
  // fake token 검증 대신 그냥 바로 응답
  res.json({
    user: { id: 1, name: '테스트유저', email: 'test@example.com' }
  });
});

module.exports = router;