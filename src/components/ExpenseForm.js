import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [expenseData, setExpenseData] = useState({
    amount: "",
    category: "",
    description: "",
  });

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    setExpenses((previousExpenses) => [...previousExpenses, expenseData]); // Add new expense
    setExpenseData({ amount: "", category: "", description: "" }); // Clear the form
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-green-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Add Expense</h2>

      <form onSubmit={handleFormSubmit}>
        {/* Input for expense amount */}
        <div>
          <label className="block text-green-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            value={expenseData.amount}
            onChange={(e) =>
              setExpenseData({ ...expenseData, amount: e.target.value })
            }
            className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Input for expense category */}
        <div>
          <label className="block text-green-700 font-medium mb-2">Category</label>
          <input
            type="text"
            value={expenseData.category}
            onChange={(e) =>
              setExpenseData({ ...expenseData, category: e.target.value })
            }
            className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., food, rent, etc."
            required
          />
        </div>

        {/* Input for expense description */}
        <div>
          <label className="block text-green-700 font-medium mb-2">Description</label>
          <input
            type="text"
            value={expenseData.description}
            onChange={(e) =>
              setExpenseData({ ...expenseData, description: e.target.value })
            }
            className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Optional"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold p-3 rounded-md mt-4 hover:bg-green-700 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
