import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import APIService from './APIService';
import { useCookies } from 'react-cookie';

function FeelingsChart() {
  const [token, setToken] = useCookies('mytoken')
  const [user, setuser] = useCookies(['username'])
  const username = user['username']
  const [feelings, setFeelings] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend when the component mounts
    APIService.GetFeeling(token['mytoken']).then(resp => {
      setFeelings(resp);
    });
  }, []);

  useEffect(() => {
    // Create the chart when the feelings data changes
    const ctx = document.getElementById('myChart').getContext('2d');

    // Extract the data for today from the feelings array
    const today = new Date();
    const todayData = feelings.filter((feeling) => {
      if(feeling.owner === username){
        const feelingDate = new Date(feeling.date);
        return feelingDate.toDateString() === today.toDateString();
      }
    });

    // Sort the data by date in ascending order
    todayData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Extract the labels and data from the todayData array
    const labels = todayData.map((feeling) => {
      if(feeling.owner===username){
        const feelingDate = new Date(feeling.date);
        return `${feelingDate.getHours()}:${feelingDate.getMinutes()}:${feelingDate.getSeconds()}`;  
      }
    });
    const feelingsMap = {
      'Crying': 1,
      'Sad Tear': 2,
      'Sad': 3,
      'Meh' : 4,
      'Smile' : 5,
      'Greateful' : 6,
      'Wonderful' : 7
    };
    const data = todayData.map((feeling) => feelingsMap[feeling.name]);

    // Create the chart using Chart.js
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My Mood Progression Today',
            data: data,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointRadius: 4,
            pointHitRadius: 10,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Clean up the chart when the component unmounts
    return () => chart.destroy();
  }, [feelings]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <div style={{ width: '60%', padding: '', marginLeft: '0', top: '0', backgroundColor : 'white', marginTop : '10px', borderRadius : '7px' }}>
      <canvas id="myChart" />
      </div>
    </div>
  ) 
}

export default FeelingsChart;
