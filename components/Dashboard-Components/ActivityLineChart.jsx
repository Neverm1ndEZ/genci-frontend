'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ActivityLineChart() {
  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
        style: {
          colors: '#ffffff',
        },
      },
    },
    stroke: {
      curve: 'smooth',
      colors: ['#FFC39B', '#FF69B4'],
    },
    dataLabels: {
      style: {
        colors: ['#FFA500', '#FF69B4'],
      },
    },
    markers: {
      colors: ['#FFA500', '#FF69B4'],
    },
    legend: {
      labels: {
        colors: ['#ffffff', '#ffffff'],
      },
      markers: {
        fillColors: ['#FFA500', '#FF69B4'],
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true,
        format: 'dd/MM/yy HH:mm', 
      },
      y: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      marker: {
        show: false,
    },
    },
  };

  const series = [
    {
      name: 'Lessons',
      data: [
        [new Date('2023-01-01'), 5],
        [new Date('2023-01-02'), 6],
        [new Date('2023-01-03'), 23],
        [new Date('2023-01-04'), 43],
        [new Date('2023-01-05'), 20],
        [new Date('2023-01-06'), 56]
      ],
    },
    {
      name: 'Assignments',
      data: [
        [new Date('2023-01-01'), 0],
        [new Date('2023-01-02'), 20],
        [new Date('2023-01-03'), 40],
        [new Date('2023-01-04'), 60],
        [new Date('2023-01-05'), 60],
        [new Date('2023-01-06'), 40],
      ],
    },
  ];

  return (
    <div className="w-full  sm:w-1/2 md:w-3/5 bg-darkBackgroundSecondary rounded-lg pt-4 md:pr-4 p-2">
      <ApexChart type="line" options={options} series={series} className="scale-105 md:scale-100"/>
    </div>
  );
}
