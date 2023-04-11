import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

function TasksChart() {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [labels, setLabels] = useState(['High', 'Medium', 'Low', 'None']);
  const [data, setData] = useState([70, 25, 30, 15]);
  const [selectedDataset, setSelectedDataset] = useState('priority');

  useEffect(() => {
    if (!chartInstance.current && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: selectedDataset === 'priority' ? 'Tasks stats based on priority' : 'Tasks stats based on state',
              data: data,
              fill: true,
              borderColor: selectedDataset === 'priority' ? 'rgb(255,99,132)' : 'rgb(0,99,132)',
              backgroundColor: selectedDataset === 'priority' ? 'rgba(255,99,132, 0.3)' : 'rgba(0,99,132, 0.3)',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: '',
            },
          },
          scales: {
            y: {
              min: 10,
              max: 100,
            },
          },
        },
      });
      chartInstance.current = newChartInstance;
    } else {
      chartInstance.current.data.labels = labels;
      chartInstance.current.data.datasets[0].label = selectedDataset === 'priority' ? 'Tasks stats based on priority' : 'Tasks stats based on state';
      chartInstance.current.data.datasets[0].data = data;
      chartInstance.current.data.datasets[0].borderColor = selectedDataset === 'priority' ? 'rgb(255,99,132)' : 'rgb(0,99,132)';
      chartInstance.current.data.datasets[0].backgroundColor = selectedDataset === 'priority' ? 'rgba(255,99,132, 0.3)' : 'rgba(0,99,132, 0.3)';
      chartInstance.current.update();
    }
  }, [labels, data, selectedDataset]);

  const handlePriorityClick = () => {
    setLabels(['High', 'Medium', 'Low', 'None']);
    setData([70, 25, 30, 15]);
    setSelectedDataset('priority');
  };

  const handleStateClick = () => {
    setLabels(['All tasks', 'Done', 'Cancelled', 'Overdue']);
    setData([100, 70, 20, 10]);
    setSelectedDataset('state');
  };

  return (
    <div style={{ width: '40%', padding: '20px', marginLeft: '28%', marginTop : "45px" }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handlePriorityClick} style={{ marginRight: '10px' }}>
          tasks Priority
        </button>
        <button onClick={handleStateClick}>Tasks State</button>
      </div>
      <canvas ref={chartContainer} />
      
    </div>
  );
}

export default TasksChart;
