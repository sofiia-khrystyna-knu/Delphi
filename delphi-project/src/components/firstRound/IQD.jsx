import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Function to calculate Q1 and Q3
const calculateQuartiles = (answers) => {
  if (answers.length === 0) return { q1: 0, q3: 0 };
  console.log(answers.length);

  answers.sort((a, b) => a - b);

  const quartile = (answers, q) => {
    const pos = answers.length * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (answers[base + 1] !== undefined) {
      return answers[base] + rest * (answers[base + 1] - answers[base]);
    } else {
      return answers[base];
    }
  };

  const q1 = quartile(answers, 0.25);
  const q3 = quartile(answers, 0.75);

  return { q1, q3 };
};

// Function to calculate IQD
const calculateIQD = (answers) => {
  const { q1, q3 } = calculateQuartiles(answers);
  console.log(`'q1:' ${q1}, 'q3:' ${q3}`);
  // console.log(q3);

  return (q3 - q1) / 2;
};

export const IQD = ({ answers, title, labels }) => {
  if (!Array.isArray(answers) || answers.length === 0) {
    console.error("Invalid answers data");
    return null;
  }

  // Calculate IQD for each question
  const iqds = answers[0].map((_, questionIndex) => {
    const questionAnswers = answers.map(personAnswers => personAnswers[questionIndex]);
    return calculateIQD(questionAnswers);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'IQD',
        data: iqds,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Твердження',
        },
        ticks: {
          autoSkip: false,
          lineHeight: 1.3,
          callback: function (value) {
            let label = value;
            // Customize label here if needed
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
        title: {
          display: true,
          text: 'IQD',
        },
        beginAtZero: true,
      },
    },
  };

  if (answers) {
    return (
      <div style={{ width: '600px', height: '400px', border: '1px solid red' }}>
        <Bar data={chartData} options={options} />
      </div>
    )
  }
  else if (answers) {
    return (
      <div style={{ width: '600px', height: '400px', border: '1px solid red' }}>
        <Bar data={chartData} options={options} />
      </div>
    )
  }
};
