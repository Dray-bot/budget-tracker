import React, { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Chart from "./components/Chart";
import UserProfileForm from "./components/UserProfileForm"; // Added for user profile
import ProfileSummary from "./components/ProfileSummary"; // Added for profile summary

function App() {
  const [income, setIncome] = useState(0); // To keep track of income
  const [expenses, setExpenses] = useState([]); // To keep track of expenses
  const [userProfile, setUserProfile] = useState({
    name: "",
    budgetGoal: 0,
    currency: "₦",
    notifications: true,
  });

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  
  // Calculate the balance (income minus expenses)
  const balance = income - totalExpenses;

  // Function to add income
  const handleAddIncome = (amount) => {
    setIncome((prev) => prev + Number(amount)); // Add the new income to the previous total
  };

  // Function to handle adding expense
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]); // Add new expense to the list
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
        💰 Student Budget Tracker
      </h1>

      {/* User Profile Form */}
      <UserProfileForm userProfile={userProfile} setUserProfile={setUserProfile} />

      {/* Profile Summary */}
      <ProfileSummary userProfile={userProfile} />

      {/* Income, Expenses, and Balance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-lg font-semibold text-green-700">Income</h2>
          <p className="text-2xl text-green-600 font-bold">₦{income}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
          <h2 className="text-lg font-semibold text-red-700">Expenses</h2>
          <p className="text-2xl text-red-600 font-bold">₦{totalExpenses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold text-blue-700">Balance</h2>
          <p className="text-2xl text-blue-600 font-bold">₦{balance}</p>
        </div>
      </div>

      {/* Income Form */}
      <IncomeForm setIncome={handleAddIncome} />
      
      {/* Expense Form */}
      <ExpenseForm setExpenses={handleAddExpense} />

      {/* List of Expenses */}
      <ExpenseList expenses={expenses} />

      {/* Chart showing expenses and balance */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <Chart income={income} expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
