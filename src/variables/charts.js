/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
    xAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample1 = {
  data1: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Montos de ingreso",
        fill: true,
        backgroundColor: "rgba(29,140,248,0.2)",
        borderColor: "#1f8ef1",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: "#1f8ef1",
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: "#1f8ef1",
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [], // Empty array to be populated with API data
      },
    ],
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample2 = {
  data: {
    // Modify this chart data according to your needs
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "My Second dataset",
        fill: true,
        backgroundColor: "rgba(72, 72, 176, 0.2)",
        borderColor: "#3D5170",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: "#3D5170",
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: "#3D5170",
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [120, 100, 80, 140, 110, 130, 90, 100, 120, 140, 160, 180],
      },
    ],
  },
  options: chart1_2_options,
};

const chartExample3 = {
  data: {
    // Modify this chart data according to your needs
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "My Third dataset",
        fill: true,
        backgroundColor: "rgba(72, 176, 72, 0.2)",
        borderColor: "#45A05C",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: "#45A05C",
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: "#45A05C",
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [60, 80, 100, 90, 120, 110, 130, 150, 140, 120, 100, 80],
      },
    ],
  },
  options: chart1_2_options,
};

const chartExample4 = {
  data: {
    // Modify this chart data according to your needs
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "My Fourth dataset",
        fill: true,
        backgroundColor: "rgba(176, 72, 72, 0.2)",
        borderColor: "#9B444E",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: "#9B444E",
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: "#9B444E",
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 60, 100, 90, 70, 110, 100, 120, 130, 140, 100, 80],
      },
    ],
  },
  options: chart1_2_options,
};

export { chartExample1, chartExample2, chartExample3, chartExample4 };