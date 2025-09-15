import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TransactionListPage from './pages/TransactionListPage'
import AddTransactionPage from './pages/AddTransactionPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>대시보드</Link>
        <Link to="/transactions" style={{ marginRight: '1rem' }}>거래 내역</Link>
        <Link to="/add-transaction">거래 추가</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionListPage />} />
        <Route path="/add-transaction" element={<AddTransactionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App