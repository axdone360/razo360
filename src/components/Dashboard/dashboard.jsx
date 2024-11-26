import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/lead/dashboardLeads");
      setDashboardData(response.data.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  if (!dashboardData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const statusData = {
    labels: Object.keys(dashboardData.statusCount),
    datasets: [
      {
        data: Object.values(dashboardData.statusCount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const leadFromData = {
    labels: Object.keys(dashboardData.leadFromCount),
    datasets: [
      {
        label: 'Lead Source',
        data: Object.values(dashboardData.leadFromCount),
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const dateRangeData = {
    labels: ['Past Week', 'Past Month'],
    datasets: [
      {
        label: 'Leads',
        data: [dashboardData.dateRanges.pastWeek, dashboardData.dateRanges.pastMonth],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="min-h-screen shadow-md rounded-lg bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Status Count Widget */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Lead Status</h2>
          <div className="h-64">
            <Pie data={statusData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Lead Source Widget */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Lead Source</h2>
          <div className="h-64">
            <Bar 
              data={leadFromData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Date Range Widget */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Leads Over Time</h2>
          <div className="h-64">
            <Bar 
              data={dateRangeData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-sm text-blue-800">Total Leads</p>
              <p className="text-2xl font-bold text-blue-600">
                {Object.values(dashboardData.statusCount).reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-green-800">Open Leads</p>
              <p className="text-2xl font-bold text-green-600">{dashboardData.statusCount.Open}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">Closed Leads</p>
              <p className="text-2xl font-bold text-yellow-600">{dashboardData.statusCount.Closed}</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-sm text-red-800">Not Interested</p>
              <p className="text-2xl font-bold text-red-600">{dashboardData.statusCount['Not Interested']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

