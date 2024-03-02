import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function ColumnChart(props) {
  const seriesData = [
    {
      name: "Đạt",
      data: [44, 55, 57, 56],
      color: "#3bc992e6",
    },
    {
      name: "Không đạt",
      data: [76, 85, 101, 98],
      color: "#7140809c",
    },
  ];

  const [chartData, setChartData] = useState(() => ({
    series: seriesData,
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        title: {
          text: "Tháng",
        },
        categories: ["Feb", "Mar", "Apr", "May"],
      },
      yaxis: {
        title: {
          text: "Số lượng quả cam (quả)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  }));

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          series={chartData.series}
          options={chartData.options}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ColumnChart;
