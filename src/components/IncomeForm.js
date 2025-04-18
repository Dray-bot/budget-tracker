import React, { useState } from "react";

function IncomeForm({ setIncome }) {
  const [incomeInput, setIncomeInput] = useState(""); // Store the income input

  // Handle the form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Stop the form from reloading the page

    if (isNaN(incomeInput) || incomeInput <= 0) {
      // Check if the input is a number and greater than 0
      alert("Please enter a valid income amount.");
      return;
    }
    
    const amount = parseFloat(incomeInput); // Convert the input to a number
    setIncome(amount); // Pass the income to the parent component
    setIncomeInput(""); // Clear the input field after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-green-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Add Income</h2>

      <form onSubmit={handleFormSubmit}>
        {/* Input for the income amount */}
        <div>
          <label className="block text-green-700 font-medium mb-2">Income Amount</label>
          <input
            type="number"
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)} // Update income input when user types
            className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            min="0" // Make sure the value is not negative
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md mt-4 hover:bg-green-700 transition"
        >
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomeForm;
