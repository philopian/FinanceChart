import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          source: "labels"
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Closing price ($)"
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
  income: [3000, 2000, 3000, 2000, 3000, 2000],
  fixed: [300, 400, 300, 400, 300, 400],
  expenses: [4000, 4000, 4000, 4000, 4000, 4000]
};

const data = {
  labels: DATA.months,
  datasets: [
    {
      label: "Fixed Expenses",
      borderColor: "rgb(249,152,159)",
      backgroundColor: "rgba(249,152,159,0.6)",
      data: DATA.income,
      type: "line"
    },
    {
      label: "Expenses",
      borderColor: "rgb(249,152,159)",
      backgroundColor: "rgba(249,152,159,0.6)",
      data: DATA.fixed,
      type: "line"
    },
    {
      label: "Expenses",
      borderColor: "rgb(126,211,178)",
      backgroundColor: "rgba(126,211,178,0.6)",
      data: DATA.expenses,
      type: "line"
    }
  ]
};

export default () => (
  <div>
    <Line data={data} options={options} />
  </div>
);
