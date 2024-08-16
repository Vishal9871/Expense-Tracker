import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <div className="expense-info">
                <span className="expense-title">{expense.title}</span>
                <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
                <span className="expense-date">{new Date(expense.date).toLocaleDateString('en-IN')}</span>
              </div>
              <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;