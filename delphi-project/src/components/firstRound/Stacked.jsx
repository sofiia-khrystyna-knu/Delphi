import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Stacked = ({ data, title }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Твердження',
        },
        ticks: {
          autoSkip: false,
          lineHeight: 1.3, // Optional: Adjust line height for wrapping
          callback: function (value) {
            let label = value;
            if (label.length > 25) {
              label = label.split(/\s+/).map(function (word) {
                return word.length > 15 ? word.match(/.{1,15}/g).join('\n') : word;
              }).join(' ');
            }
            return label;
          }
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Кількість учасників',
        },
      },
    },
  };

  if (data) {
    return (
      <div style={{ width: '600px', height: '400px', border: '1px solid red' }}>
        <Bar data={data} options={options} />
      </div>
    )
  }
  else if (data) {
    return (
      <div style={{ width: '600px', height: '400px', border: '1px solid red' }}>
        <Bar data={data} options={options} />
      </div>
    )
  }
};
