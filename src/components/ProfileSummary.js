import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Adding icons for better UX

// Function to format the currency with the appropriate symbol
const formatCurrency = (amount, currency) => {
  switch (currency) {
    case "₦":
      return `₦${amount.toLocaleString()}`;
    case "$":
      return `$${amount.toLocaleString()}`;
    case "€":
      return `€${amount.toLocaleString()}`;
    default:
      return amount;
  }
};

const ProfileSummary = ({ userProfile }) => {
  if (!userProfile) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
        <p className="text-gray-500">No user profile found. Please complete your profile.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Profile Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Name:</span>
          <span className="text-lg font-semibold text-gray-900">{userProfile.name}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Budget Goal:</span>
          <span className="text-lg font-semibold text-gray-900">
            {formatCurrency(userProfile.budgetGoal, userProfile.currency)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Currency:</span>
          <span className="text-lg font-semibold text-gray-900">{userProfile.currency}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Notifications:</span>
          <span className="flex items-center">
            {userProfile.notifications ? (
              <FaCheckCircle className="text-green-500 mr-2" />
            ) : (
              <FaTimesCircle className="text-red-500 mr-2" />
            )}
            {userProfile.notifications ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
