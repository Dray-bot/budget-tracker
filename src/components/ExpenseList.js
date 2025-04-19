import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">Expense List</h2>

      {/* If no expenses */}
      {expenses.length === 0 ? (
        <p className="text-gray-500 italic">No expenses added yet.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 pb-4"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {expense.description || "No description"}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  {expense.category || "No category"}
                </p>
              </div>
              <p className="text-lg font-bold text-green-600">
                ₦{isNaN(expense.amount) ? "Invalid amount" : Number(expense.amount).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
