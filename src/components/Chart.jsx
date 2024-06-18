import React from 'react'
import { salesData } from '../constants'
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const categories = salesData.map((item) => item.title);
    const values = salesData.map((item) => parseInt(item.value.replace("k", "")));

    const series = [
        {
            name: "Value",
            data: values,
        },
    ];

    const options = {
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis :{
            categories: categories,
        },
        tooltip: {
            y: {
                formatter: function (val,opts) {
                    return `${val.toLocaleString()}`;
                },
            },
        },
    };

    return (
    <div className='rounded-lg bg-white p-4 gap-8'>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Chart
