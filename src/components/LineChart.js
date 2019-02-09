import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [{ ticks: { source: "labels" } }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: (value, index, values) => {
            if (parseInt(value) >= 1000) {
              return (
                "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            } else {
              return "$" + value;
            }
          }
        }
      }
    ]
  }
};

const DATA = {
  months: [
    // "March 2018",
    // "April 2018",
    // "May 2018",
    // "June 2018",
    // "July 2018",
    // "August 2018",
    "Sept 2018",
    "Oct 2018",
    "Nov 2018",
    "Dec 2018",
    "Jan 2019",
    "Feb 2019"
  ],
  income: [4000, 4000, 4000, 4000, 4000, 4000],
  expenses: [3000, 2000, 3000, 2000, 3000, 2000],
  fixed: [300, 400, 300, 400, 300, 400]
};

const data = {
  labels: DATA.months,
  datasets: [
    {
      label: "Expenses",
      borderColor: "rgb(150, 48, 54)",
      backgroundColor: "rgb(178,54,61)",
      data: DATA.expenses,
      type: "line"
    },
    {
      label: "Income",
      borderColor: "rgb(31, 135, 58)",
      backgroundColor: "rgb(36,178,72)",
      data: DATA.income,
      type: "line"
    }
  ]
};

export default () => (
  <div>
    <Line data={data} options={options} />
  </div>
);
