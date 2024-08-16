import React from 'react';

const ExpenseSummary = ({ totalExpense, clearExpenses }) => {
  return (
    <div className="expense-summary">
      <h2>Total Expense</h2>
      <p className="total-amount">₹{totalExpense.toFixed(2)}</p>
      <button onClick={clearExpenses} className="clear-expenses-btn">Clear Expenses</button>
    </div>
  );
};

export default ExpenseSummary;