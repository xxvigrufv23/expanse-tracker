import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TransactionListPage from './pages/TransactionListPage'
import AddTransactionPage from './pages/AddTransactionPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App: React.FC = () => {
  return (
    <Router>
      {/* 네비게이션 */}
      <nav className="bg-white border-b shadow-sm px-6 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link to="/" className="text-xl font-bold text-indigo-600">
            💸 ExpenseTracker
          </Link>

          {/* Center: Menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              대시보드
            </Link>
            <Link 
              to="/transactions" 
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              거래 내역
            </Link>
            <Link 
              to="/add-transaction" 
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              거래 추가
            </Link>
          </div>

          {/* Right: Auth */}
          <div className="flex space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-1.5 rounded-md text-gray-600 hover:text-gray-900 transition"
            >
              로그인
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              회원가입
            </Link>
          </div>
        </div>
      </nav>

      {/* 페이지 라우팅 */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionListPage />} />
          <Route path="/add-transaction" element={<AddTransactionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App