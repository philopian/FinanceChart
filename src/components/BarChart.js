import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    // xAxes: [{ stacked: true}],
    // yAxes: [{ stacked: true }]
  }
};

const data = {
  labels: [
    // "March 2018",
    // "April 2018",
    // "May 2018",
    // "June 2018",
    // "July 2018",
    // "August 2018",
    "September 2018",
    "October 2018",
    "November 2018",
    "December 2018",
    "January 2019",
    "February 2019"
  ],
  datasets: [
    {
      label: "Expenses",
      borderColor: "rgb(126,211,178)",
      // backgroundColor: "rgba(126,211,178,0.8)",
      data: [4000, 4000, 4000, 4000, 4000, 4000],
      type: "line"
    },
    {
      label: "Delta",
      borderColor: "rgb(111, 174, 150)",
      backgroundColor: "rgb(126,211,178)",
      data: [3000, 2000, 3000, 2000, 3000, 2000],
      type: "bar"
    },
    {
      label: "Fixed Expenses",
      backgroundColor: "#f9989f",
      data: [-300, -400, -300, -400, -300, -400],
      type: "line"
    }
  ]
};

export default () => (
  <div>
    <Bar data={data} options={options} />
  </div>
);
