import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const options = {
  scales: {
    // xAxes: [{ stacked: true }],
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
    // "September 2018",
    "October 2018",
    "November 2018",
    "December 2018",
    "January 2019",
    "February 2019"
  ],

  datasets: [
    {
      label: "Income",
      data: [4000, 4000, 4000, 4000, 4000],
      backgroundColor: "rgba(63,103,126,1)",
      hoverBackgroundColor: "rgba(50,90,100,1)"
    },
    {
      label: "Fixed Expenses",
      data: [238, 553, 746, 884, 903],
      backgroundColor: "rgba(163,103,126,1)",
      hoverBackgroundColor: "rgba(140,85,100,1)"
    },
    {
      label: "Expenses",
      data: [1238, 553, 746, 884, 903],
      backgroundColor: "rgba(63,203,226,1)",
      hoverBackgroundColor: "rgba(46,185,235,1)"
    }
  ]
};

export default () => (
  <div>
    <HorizontalBar data={data} options={options} />
  </div>
);
