import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-6">Expense List</h2>

      {/* Display message if no expenses */}
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="space-y-4">
          {/* Loop through expenses and display each one */}
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div>
                <p className="font-semibold">{expense.description}</p>
                <p className="text-gray-600">{expense.category}</p>
              </div>
              <p className="text-xl font-bold">₦{expense.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
