---

```markdown
# 💸 Expense Tracker (풀스택 가계부 관리 프로젝트)

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%2BVite%2BTS-61DAFB?logo=react&logoColor=white&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=node.js&logoColor=white&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge"/>
</p>

> 📒 **지출・수입 내역을 관리**하고, 대시보드를 통해 시각화하는 풀스택 학습 프로젝트  
> 프론트엔드와 백엔드를 분리하여 **API 통신 구조**와 **JWT 인증**, **DB 연동**까지 다뤘습니다.  

---

## ✨ 주요 기능
- 🔑 **회원가입 / 로그인** (JWT 인증 예정 – 현재는 Mock 응답)
- 💰 **거래내역 CRUD** (추가, 수정, 삭제, 조회)
- 📊 **대시보드 시각화** (React-Chart.js)
- 🗄️ 추후 **PostgreSQL 연동** → 실제 데이터 저장

---

## 📂 프로젝트 구조
```bash
expanse-tracker/
├── client/   # 프론트엔드 (React + Vite + TypeScript)
└── server/   # 백엔드 (Node.js + Express)
```

---

## 🚀 실행 방법

### 1. 백엔드 실행
```bash
cd server
npm install
npm run dev
```
➡ 서버: `http://localhost:5000`

### 2. 프론트엔드 실행
```bash
cd client
npm install
npm run dev
```
➡ 클라이언트: `http://localhost:5173`

---

## 🛠 사용 기술 스택

### 🎨 Frontend
- ⚛️ React 18 (Vite + TypeScript)
- 🔀 React Router DOM
- 📡 Axios (Service Layer, Interceptor)
- 📊 Chart.js (react-chartjs-2)
- 🎨 Styled-Components / Tailwind (추가 예정)

### 💾 Backend
- 🟢 Node.js (Express)
- 🔄 Nodemon (개발환경)
- 🔐 JWT (인증 – 예정)
- 🗄️ PostgreSQL (DB – 예정)

---

## 📌 현재 진행 상황
- [x] Express 서버 기본 실행
- [x] Vite + React TypeScript 프로젝트 세팅
- [x] 기본 페이지 라우팅 구조 완성
- [x] Service Layer (axios) 분리
- [x] Postman으로 Auth API Mock 테스트 완료
- [ ] PostgreSQL 연동
- [ ] JWT 인증
- [ ] 거래 내역 CRUD 실제 DB 연동
- [ ] 대시보드 차트 완성
- [ ] 배포 (Vercel + Render or Railway)

---

## 🧑‍💻 앞으로의 계획
✅ DB 연결 (PostgreSQL)  
✅ 회원가입/로그인 JWT 인증 완성  
✅ 거래 내역 CRUD API → 프론트 연동  
✅ 대시보드 시각화 → 월별/카테고리별 통계  

---

## 📸 실행 화면 (예시 캡쳐 추가 예정)
- [ ] 로그인 / 회원가입 화면
- [ ] 대시보드 차트 UI
- [ ] 거래 내역 관리 리스트  
```

---
