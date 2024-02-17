'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ActivityPieChart() {
  const options = {
    chart: {
      id: 'apexchart-example'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Total',
            color: "#FF894F",
            fontSize: '20px' 

          },  
                    value: {
            show: true,
            color: '#ffffff',
            fontSize: '16px',
            fontWeight : '600'
            
          },
        }
      }
    },
    
    colors: ['#FF894F'], // Set radial bar colors
  };

  const series = [30];

  return (
    <div className="w-full sm:w-[45%] md:w-2/5  bg-[#131619] rounded-lg flex flex-col items-center py-2 px-6 md:px-10 justify-center text-lg md:text-xl font-semibold text-center">
      <h2>Learning Activity</h2>
      <div>
      <ApexChart type="radialBar" options={options} series={series} className="md:scale-110"/>

      </div>
      <p>Complete Progress
Completion 🎉</p>
    </div>
  );
}
