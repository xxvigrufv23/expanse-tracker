// transactions 관련 API 함수
import API from './api';

export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  note?: string;
  transaction_date: string;
}

// 거래 내역 조회
export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await API.get('/transactions');
  return res.data.transactions;
};

// 거래 추가
export const addTransaction = async (data: Omit<Transaction, 'id'>): Promise<Transaction> => {
  const res = await API.post('/transactions', data);
  return res.data.transaction;
};

// 거래 삭제
export const deleteTransaction = async (id: number): Promise<void> => {
  await API.delete(`/transactions/${id}`);
};