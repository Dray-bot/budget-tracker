import React, { useState } from "react";

const UserProfileForm = ({ userProfile, setUserProfile }) => {
  const [errors, setErrors] = useState({}); // For form validation

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation for form fields
  const validateForm = () => {
    const newErrors = {};
    if (!userProfile.name) {
      newErrors.name = "Name is required.";
    }
    if (userProfile.budgetGoal <= 0) {
      newErrors.budgetGoal = "Budget goal must be a positive number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // For now, we'll just log the data. Later, you can send it to an API or do something else.
      console.log("User Profile Submitted:", userProfile);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            aria-describedby="name-error"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="budgetGoal" className="block mb-2 text-gray-700">
            Budget Goal (₦)
          </label>
          <input
            type="number"
            id="budgetGoal"
            name="budgetGoal"
            value={userProfile.budgetGoal}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Set your budget goal"
            aria-describedby="budgetGoal-error"
            aria-invalid={errors.budgetGoal ? "true" : "false"}
          />
          {errors.budgetGoal && (
            <p id="budgetGoal-error" className="text-red-500 text-sm mt-1">
              {errors.budgetGoal}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="currency" className="block mb-2 text-gray-700">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            value={userProfile.currency}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="₦">₦ Naira</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="notifications" className="block mb-2 text-gray-700">
            Enable Notifications
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={userProfile.notifications}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Yes, I want to receive notifications</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
