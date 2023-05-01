import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function SleepChart() {
  const [sleepData, setSleepData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours of Sleep",
        data: [5, 5.5, 7, 6, 8, 6, 7],
        fill: true,
        backgroundColor: "rgba(119, 199, 228, 0.45)",
        borderColor: "#2B90E7",
        borderWidth: 2,
        borderRadius: 2, // set the corner radius
        tension: 0.3, // add a curve to the line
      },
    ],
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const chart = new Chart(canvas, {
        type: "line",
        data: sleepData,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max : 12,
              ticks: {
                stepSize: 1,
              },
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [sleepData]);

  const handleSleepDataUpdate = (dayIndex, newValue) => {
    setSleepData((prevData) => {
      const newData = { ...prevData };
      newData.datasets[0].data[dayIndex] = newValue;
      return newData;
    });
  };

  const SleepTracker = () => {
    const handleSleepInputChange = (event, dayIndex) => {
      const newValue = parseFloat(event.target.value);
      if (!isNaN(newValue)) {
        handleSleepDataUpdate(dayIndex, newValue);
      }
    };

  };

  return (
    <div style={{width : '700px'}}>
      <SleepTracker />
      <canvas ref={canvasRef}  />
    </div>
  );
}

export default SleepChart;
