import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Bar } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {  } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { useSelector } from 'react-redux';
import { getReportsTotal } from '../../../redux/reports/reports-selectors';

import s from "./graph.module.scss"
import { element } from 'prop-types';
Chart.register(ChartDataLabels);

const Graph = ({category}) => {
  const transaction = useSelector(getReportsTotal);
  const targetTransactions = transaction.filter(tx => tx.category === category);
  
  const transactionsByLabel = {};
  targetTransactions.forEach(tx => {
    const label = tx.description;
    if (!transactionsByLabel[label]) {
      transactionsByLabel[label] = {
        value: 0,
        items: [],
      };
    } 
    transactionsByLabel[label].value += tx.value;
    transactionsByLabel[label].items.push(tx);
  });

  const categoriesSortedByValue = Object.keys(transactionsByLabel).sort((a, b) => {
    return transactionsByLabel[b].value - transactionsByLabel[a].value;
  });

  const labels = categoriesSortedByValue;
  const values = categoriesSortedByValue.map(label => transactionsByLabel[label].value);

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
      tooltip: {
        callbacks: {
            label: (item) =>
                `${item.formattedValue} UAH`,
        },
    },
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        formatter: function(value, context) {
          return `${value} UAH`;
        }
     },
    },
   
  };
  
    return (
      <div className={s.wrapper}>
        <div className={s.box}>
          {isDesktop ? <Bar data={data} options={options} /> : <Bar data={mobileData} options={mobileOptions} />}
        </div>
      </div> 
    );
  
};

export default Graph;