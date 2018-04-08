import React, {Component} from 'react';
const LineChart = require("react-chartjs").Line;

class App extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {},
            chartOptions: {}
        }
    }

    componentDidMount() {
        // set charting data
        this.setState(Object.assign({}, ...this.state, 
            {chartData:  {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3]
            }]
        }}));

        // set charting options
        this.setState(Object.assign({}, ...this.state, 
            { chartOptions: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            } }));
            
            // call updateCharts in 5000
            setTimeout(() => {
                this.updateCharts();
            }, 5000);
    }

    updateCharts() {
        let newChartData = {...this.state.chartData};
        newChartData.labels.push("White");
        newChartData.datasets[0].data.push(10);
        this.setState({chartData : newChartData});
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return(
            this.isEmpty(this.state.chartData) ?
            <div>Loading ... </div> :
            <LineChart data={this.state.chartData} options={this.state.chartOptions} width="600" height="250"/>
        );
    }
}

export default App;
