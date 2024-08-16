import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header>
      <h1> Expense Tracker</h1>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;