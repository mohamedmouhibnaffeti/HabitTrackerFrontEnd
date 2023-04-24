import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import APIService from './APIService';

function TasksChart() {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [labels, setLabels] = useState();
  const [data, setData] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState('state');
  const [tasks, settasks] = useState([])
  useEffect(() => {
    APIService.GetTasks()
      .then((resp) => settasks(resp))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (tasks && chartContainer.current) {
      const todayLabel = "Today";
      let hasToday = false;
      let todayCount = 0;
      const taskCountsByDate = {};

      tasks && tasks.length > 0 && tasks.forEach((task) => {
        const date = new Date(task.date);
        const dateLabel = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const todayDate = new Date();
        const todayDateString = `${todayDate.getMonth() + 1}/${todayDate.getDate()}/${todayDate.getFullYear()}`;
        if (date.toDateString() === todayDate.toDateString()) {
          hasToday = true;
          todayCount++;
        }
        if (!taskCountsByDate[dateLabel]) {
          taskCountsByDate[dateLabel] = 0;
        }
        taskCountsByDate[dateLabel]++;
      });

      // Add today's label if there are no tasks for today and today's task value is 0
      if (!hasToday && taskCountsByDate[todayLabel] === undefined) {
        taskCountsByDate[todayLabel] = 0;
      }

      const tasksLabels = Object.keys(taskCountsByDate)
        .sort((a, b) => {
          const dateA = a === todayLabel ? new Date() : new Date(a);
          const dateB = b === todayLabel ? new Date() : new Date(b);
          return dateA - dateB;
        })
        .map((label) => {
          const date = label === todayLabel ? new Date() : new Date(label);
          const isToday = label === todayLabel || date.toDateString() === new Date().toDateString();
          return isToday ? todayLabel : `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        });

      if (hasToday) {
        taskCountsByDate[todayLabel] = todayCount;
      }

      const taskPerDate = tasksLabels.map((label) => taskCountsByDate[label]);

      setLabels(tasksLabels);
      setData(taskPerDate);
      setSelectedDataset('state');
    }
  }, [tasks]);

  useEffect(() => {
    if (tasks && chartContainer.current) {
      if (!chartInstance.current) {
        const newChartInstance = new Chart(chartContainer.current, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label:
                  selectedDataset === 'state'
                    ? 'All tasks per date'
                    : 'Tasks Done Per Date',
                data: data,
                fill: true,
                borderColor:
                  selectedDataset === 'state' ? '#ba8438' : 'rgb(0,99,132)',
                backgroundColor:
                  selectedDataset === 'state'
                    ? 'rgba(255,99,132, 0.3)'
                    : 'rgba(0,99,132, 0.3)',
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
                min: 0,
                max: 10,
              },
            },
          },
        });
        chartInstance.current = newChartInstance;
      } else {
        chartInstance.current.data.labels = labels;
        chartInstance.current.data.datasets[0].label =
          selectedDataset === 'state' ? 'All tasks per date' : 'Tasks Done Per Date';
        chartInstance.current.data.datasets[0].data = data;
        chartInstance.current.data.datasets[0].borderColor =
          selectedDataset === 'state' ? '#ba8438' : 'rgb(0,99,132)';
        chartInstance.current.data.datasets[0].backgroundColor =
          selectedDataset === 'state' ? '#f7b24b88' : 'rgba(0,99,132, 0.3)';
        chartInstance.current.update();
      }
    }
  }, [labels, data, selectedDataset, tasks]);

  const handlePriorityClick = () => {
    const todayLabel = "Today";
    let hasToday = false;
    let todayCount = 0;
    const taskCountsByDate = {};
  
    tasks && tasks.length > 0 && tasks.map((task) => {
      if (!task.completed) {
        const date = new Date(task.date);
        const dateLabel = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const todayDate = new Date();
        const todayDateString = `${todayDate.getMonth() + 1}/${todayDate.getDate()}/${todayDate.getFullYear()}`;
        if (date.toDateString() === todayDate.toDateString()) {
          hasToday = true;
          todayCount++;
        }
        if (!taskCountsByDate[dateLabel]) {
          taskCountsByDate[dateLabel] = 0;
        }
        taskCountsByDate[dateLabel]++;
      }
    });
    // Add today's label if there are no tasks for today and today's task value is 0
    if (!hasToday && taskCountsByDate[todayLabel] === undefined) {
      taskCountsByDate[todayLabel] = 0;
    }
  
    const tasksLabels = Object.keys(taskCountsByDate)
      .sort((a, b) => {
        const dateA = a === todayLabel ? new Date() : new Date(a);
        const dateB = b === todayLabel ? new Date() : new Date(b);
        return dateA - dateB;
      })
      .map((label) => {
        const date = label === todayLabel ? new Date() : new Date(label);
        const isToday = label === todayLabel || date.toDateString() === new Date().toDateString();
        return isToday ? todayLabel : `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      });
  
    if (hasToday) {
      taskCountsByDate[todayLabel] = todayCount;
    }
  
    const taskPerDate = tasksLabels.map((label) => taskCountsByDate[label]);
  
    setLabels(tasksLabels);
    setData(taskPerDate);
    setSelectedDataset();
  };
  

  const handleStateClick = () => {
    const todayLabel = "Today";
    let hasToday = false;
    let todayCount = 0;
    const taskCountsByDate = {};
  
    tasks && tasks.length > 0 && tasks.forEach((task) => {
        const date = new Date(task.date);
        const dateLabel = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const todayDate = new Date();
        const todayDateString = `${todayDate.getMonth() + 1}/${todayDate.getDate()}/${todayDate.getFullYear()}`;
        if (date.toDateString() === todayDate.toDateString()) {
          hasToday = true;
          todayCount++;
        }
        if (!taskCountsByDate[dateLabel]) {
          taskCountsByDate[dateLabel] = 0;
        }
        taskCountsByDate[dateLabel]++;
    });
  
    // Add today's label if there are no tasks for today and today's task value is 0
    if (!hasToday && taskCountsByDate[todayLabel] === undefined) {
      taskCountsByDate[todayLabel] = 0;
    }
  
    const tasksLabels = Object.keys(taskCountsByDate)
      .sort((a, b) => {
        const dateA = a === todayLabel ? new Date() : new Date(a);
        const dateB = b === todayLabel ? new Date() : new Date(b);
        return dateA - dateB;
      })
      .map((label) => {
        const date = label === todayLabel ? new Date() : new Date(label);
        const isToday = label === todayLabel || date.toDateString() === new Date().toDateString();
        return isToday ? todayLabel : `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      });
  
    if (hasToday) {
      taskCountsByDate[todayLabel] = todayCount;
    }
  
    const taskPerDate = tasksLabels.map((label) => taskCountsByDate[label]);
  
    setLabels(tasksLabels);
    setData(taskPerDate);
    setSelectedDataset('state');
  };

  return (
    <>
    
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handlePriorityClick} style={{ marginRight: '10px', borderRadius : '6px' }}>
          Tasks Done
        </button>
        <button onClick={handleStateClick} style={{ borderRadius : '6px' }}>All Tasks</button>
      </div>
    <div style={{ width: '60%', padding: '', marginLeft: '19%', top: '0', backgroundColor : 'white', marginTop : '10px' }}>
      
      <canvas ref={chartContainer} />
      
    </div></>
  );
}

export default TasksChart;
