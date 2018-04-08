import React, {Component} from 'react';
const LineChart = require("react-chartjs").Line;

class App extends Component {
        
    render() {
        const chartData =  {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3]
            }]
        };
        const chartOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        };
        return(
            <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
        );
    }
}

export default App;
