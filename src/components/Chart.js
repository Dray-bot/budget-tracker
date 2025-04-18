import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register chart features we need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Chart = ({ income, expenses }) => {
  // Get unique categories from the list of expenses
  const categories = Array.from(new Set(expenses.map((expense) => expense.category)));

  // Function to create random colors for each chart item
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Prepare data for the Line Chart
  const dataLine = {
    labels: categories, // Labels on the X-axis are the categories
    datasets: categories.map((category) => ({
      label: `${category} Expenses`, // Each line represents one category
      data: expenses
        .filter((expense) => expense.category === category) // Get expenses for this category
        .reduce((total, expense) => total + parseFloat(expense.amount), 0), // Add up all the amounts for the category
      fill: false,
      borderColor: generateRandomColor(), // Random color for each line
      tension: 0.1, // Make the line slightly curved
    })),
  };

  // Prepare data for the Pie Chart
  const dataPie = {
    labels: expenses.map((expense) => `${expense.category} - ₦${expense.amount}`), // Each slice shows category and amount
    datasets: [
      {
        label: "Monthly Expenses", // Label for the pie chart
        data: expenses.map((expense) => parseFloat(expense.amount)), // The amount spent in each category
        backgroundColor: expenses.map(() => generateRandomColor()), // Random color for each pie slice
        borderColor: "#ffffff", // White border around the slices
        borderWidth: 1, // Width of the border
      },
    ],
  };

  // Options for the Line Chart
  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Show the legend on top
      },
      title: {
        display: true,
        text: "Expenses (Line Chart)", // Title of the line chart
      },
    },
  };

  // Options for the Pie Chart
  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Show the legend on top
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const category = tooltipItem.label;
            const amount = tooltipItem.raw;
            return `${category}: ₦${amount.toFixed(2)}`; // Show the amount in the tooltip with ₦ symbol
          },
        },
      },
    },
  };

  return (
    <div>
      {/* Line Chart section */}
      <div className="chart-container">
        <h2 className="text-xl font-semibold mb-4">Expenses (Line Chart)</h2>
        <Line data={dataLine} options={optionsLine} />
      </div>

      {/* Pie Chart section */}
      <div className="chart-container mt-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Spending Breakdown (Pie Chart)</h2>
        <Pie data={dataPie} options={optionsPie} />
      </div>
    </div>
  );
};

export default Chart;
