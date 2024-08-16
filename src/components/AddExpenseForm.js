import React, { useState } from 'react';

const AddExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      addExpense({ title, amount: parseFloat(amount) });
      setTitle('');
      setAmount('');
    }
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <div className="form-group">
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          placeholder="e.g., Groceries"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount (₹)</label>
        <input
          type="number"
          id="amount"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;