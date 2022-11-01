import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { dataPoints, dataLabels, getSortedTransactionsByTime } from "./utils"

let points = [];
let labels = []



const ctx = document.getElementById('myChart');
export const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{ 
            data: points,
            label: "Balance",
            borderColor: "#ffffff",
            fill: true,
            backgroundColor: "#03B6A1",
            borderWidth: 5,
            pointRadius: 0,
            pointHitRadius: 0,
            lineTension: 0.3,        
            radius: 3    
            

          }
        ]
      },
      options: {
        bezierCurve : true,
        responsive: true,
        title: {
          display: false,
          text: ''
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            xAxis: {
              display: false,
            },
            yAxis: {
                display: false,
              }
          }
      }
    });

    export const setData = (expenses) => {
        let counter = 0;
        let sorted = getSortedTransactionsByTime(expenses);
        let balance = 0;
        sorted.forEach((element) => {
            if (element.type == "Expense"){
                balance += element.amount; 
                points[counter] = balance;
                labels[counter] = counter;
                counter++;
            }        
        });
        myChart.update();
    };