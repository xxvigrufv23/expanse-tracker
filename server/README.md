
---

## 📂 server/README.md (Postman 예시 포함)

```markdown
# Expense Tracker - Server (Node.js + Express)

💾 가계부 관리 서비스를 위한 백엔드 API 서버입니다.  
Express + Node.js 기반으로 제작되었으며, Postman/Thunder Client 등을 통해 API 테스트 가능하며 추후 PostgreSQL 연동 예정입니다.

---

## 🚀 실행 방법

```bash
# server 폴더로 이동
cd server

# 패키지 설치
npm install

# 개발 모드 실행
npm run dev

# 프로덕션 모드 실행
npm start
```

- 기본 실행 주소: `http://localhost:5000`

---

## 📁 주요 구조
```
server/
├── routes/
│   ├── auth.js          # 회원가입 / 로그인 / 내 정보 API
│   └── transactions.js  # 거래 내역 CRUD (추후 추가 예정)
├── config/
│   └── database.js      # PostgreSQL DB 연결 (추후 연동)
├── index.js             # 서버 진입점
└── .env                 # 환경 변수 (PORT, DB, JWT_SECRET 등)
```

---

## 🛠 사용 기술
- Node.js
- Express
- Nodemon (개발 편의)
- PostgreSQL (추후 DB 연결)
- JWT (인증 예정)

---

## 🧪 Postman 테스트 예시

### 1️⃣ 회원가입 (Register)
- **URL**: `POST http://localhost:5000/api/auth/register`  
- **Body (JSON)**:
```json
{
  "name": "홍길동",
  "email": "hong@test.com",
  "password": "1234"
}
```
- **Response**:
```json
{
  "message": "회원가입 성공",
  "user": {
    "id": 1694646299999,
    "name": "홍길동",
    "email": "hong@test.com"
  }
}
```

---

### 2️⃣ 로그인 (Login)
- **URL**: `POST http://localhost:5000/api/auth/login`  
- **Body (JSON)**:
```json
{
  "email": "hong@test.com",
  "password": "1234"
}
```
- **Response**:
```json
{
  "message": "로그인 성공",
  "token": "fake-jwt-token",
  "user": {
    "id": 1,
    "name": "테스트유저",
    "email": "hong@test.com"
  }
}
```

---

### 3️⃣ 내 정보 (Get Me)
- **URL**: `GET http://localhost:5000/api/auth/me`  
- **Headers**:
  ```
  Authorization: Bearer fake-jwt-token
  ```
- **Response**:
```json
{
  "user": {
    "id": 1,
    "name": "테스트유저",
    "email": "test@example.com"
  }
}
```

---

📌 현재는 DB 없이 **임시 더미 데이터**를 응답합니다.  
추후 PostgreSQL 연동 완료 시 실제 데이터베이스 기반 CRUD로 확장할 예정입니다.
```

---