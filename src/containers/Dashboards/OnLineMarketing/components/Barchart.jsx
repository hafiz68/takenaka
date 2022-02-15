import React from 'react';
import { Bar } from "react-chartjs-2";
import { Button } from 'reactstrap';
const Barchart =() => {
  const phenomenon =()=> {
    document.getElementById("panel1").style.display = "none";
    document.getElementById("panel1").style.position = "relative";
    document.getElementById("panel1").style.opacity = "1";
    document.getElementById("panel1").style.zIndex = "1";
    document.getElementById("panel").style.display = "block";
  }
  const position =()=> {
    document.getElementById("panel1").style.display = "block";
    document.getElementById("panel1").style.position = "relative";
    document.getElementById("panel1").style.zIndex = "1";
    document.getElementById("panel1").style.opacity = "1";
    document.getElementById("panel").style.display = "none";
  }
  return (<>
    <div className="App" id="panel" style={{ width: "100%" }}>
      <h1>position Wise Issues Charts</h1>
      <center><div className='position-chart' style={{ width: "80%" }}>
        <Bar className="bar-chart"
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Dry Walls", "Wall paint issues", "Floor Cracks", "Window Frame Change", "Wall cracks"],
            datasets: [
              {
                // Label for bars
                label: "total Issues",
                // Data or value of your each variable
                data: [1234, 1500, 1789, 1292, 1100],
                // Color of each bar
                backgroundColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                // Border color of each bar
                borderColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                borderWidth: 2


              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 2000,
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            
          }}
        />
      </div><Button type='danger' color="primary" onClick={position} >Show Phonomenon chart</Button></center>
    </div>
    <div className="App1"  id="panel1" style={{ width: "100%" }}>
      <h1>Phenomenon Wise Issues Charts</h1>
      <center><div id='phenomenon-chart' style={{ width: "80%" }}>
        <Bar className="bar-chart1"
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Rain leakage", "Leakage", "Sound and vibrations", "Cracks", "Falls"],
            datasets: [
              {
                // Label for bars
                label: "total Issues",
                // Data or value of your each variable
                data: [1400, 1319, 613, 1400, 500],
                // Color of each bar
                backgroundColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                // Border color of each bar
                borderColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                borderWidth: 2


              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 2000,
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            
          }}
        />
      </div><Button type='danger' color="primary" onClick={phenomenon} >Show Position chart</Button></center>
    </div>
    </>
  );
}
  
export default Barchart;