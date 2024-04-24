import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartNineState {
  series: { data: { x: string, y: number }[] }[];
}

const ChartNine: React.FC = () => {
  const [state, setState] = useState<ChartNineState>({
    series: [
      {
        data:[
          {
            x: "Wheat",
            y: 250,
          },
          {
            x: "Canola",
            y: 149,
          },
          {
            x: "Oats",
            y: 184,
          },
          {
            x: "Pulses",
            y: 55,
          },
          {
            x: "Barley",
            y: 35,
          },
          {
            x: "Rice",
            y: 31,
          },
          {
            x: "Corn",
            y: 70,
          }
        ]
      }
    ],
  });

  // Update the state
  const updateState = () => {
    setState((prevState) => ({
      ...prevState,
      // Update the desired properties
    }));
  };
  updateState;

  const options: ApexOptions = {
    plotOptions:{
      treemap:{
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 50,
              to: 71,
              color: '#689758'
            },
            {
              from: 72,
              to: 150,
              color: '#367c1a'
            },
            {
              from: 151,
              to: 200,
              color: '#265409'
            },
            {
              from: 201,
              to: 250,
              color: '#012d21'
            },
            {
              from: 10,
              to: 40,
              color: '#a5bfa1'
            }
          ]
        }
      }

    },
    chart: {
      height: 350,
      type: "treemap",
    },
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col gap-2 border-b border-stroke px-6 py-5 dark:border-strokedark sm:flex-row sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Crop Distribution
          </h2>
        </div>

      </div>

      <div className="px-6 pt-4">
        <div id="chartNine" className="pl-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="treemap"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartNine;
