import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Bar } from 'react-chartjs-2';
import {  } from 'chart.js/auto';

import { useSelector } from 'react-redux';
import { getReportsTotal } from '../../../redux/reports/reports-selectors';

import s from "./graph.module.scss"
// component should receive two arrays as Props

const Graph = ({category}) => {
  const transaction = useSelector(getReportsTotal);

  const filteredTransactions=transaction.filter((e)=>e.category===category).sort((a,b)=>a-b);
  const filteredTransactions2=[...filteredTransactions]
  const labels=filteredTransactions.map((e)=>e.description)
  const values=filteredTransactions2.map((e)=>e.value)
  const isDesktop = useMediaQuery({
          query: '(min-width: 768px)'
        })
  const data = {
    labels: labels,
    datasets: [{
        data: values,
        barThickness: 38,
        borderRadius: 10,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
      },
    ],
  };

const mobileData={
    labels: labels,
    datasets: [{
        data: values,
        borderRadius: 10,
        barThickness: 15,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
      },
    ],
  };

  const mobileOptions = {
    indexAxis: 'y',
    aspectRatio: 1,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: 'white'
        },
        ticks: {
          display: false
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: 'white'
        },
        ticks: {
          align: 'start',
          mirror: true,
          labelOffset: -20
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {   grid: {
        display: true,
        borderColor: 'white'
      },      
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  
    return (
        <div className={s.wrapper}>{isDesktop ? <Bar data={data} options={options}/> : <Bar data={mobileData} options={mobileOptions}/>}</div> 
    );
  
};

export default Graph;