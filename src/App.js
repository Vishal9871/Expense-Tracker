import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addExpense = (expense) => {
    const newExpense = { 
      id: uuidv4(), 
      ...expense, 
      date: new Date().toISOString() 
    };
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app-container">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content">
        <AddExpenseForm addExpense={addExpense} />
        <ExpenseSummary totalExpense={totalExpense} clearExpenses={clearExpenses} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
};

export default App;