import { Component } from '@angular/core';
import { GoogleChartComponent } from './google-chart.component';

@Component({
  selector: 'app-graph-draw',
  templateUrl: './graph-draw.component.html',
  // styleUrls: ['./graph-draw.component.scss']
})
export class GraphDrawComponent extends GoogleChartComponent{
    private options;
  private data;
  private chart;
  // constructor(){
  //   console.log("Here is EvolutionComponent")
  // }

  drawGraph(){


    
    console.log("DrawGraph Evolution...");  
    this.data = this.createDataTable([
      ['Evolution', 'A1`'],
      ['FA1', 8695000],
      ['FA2', 3792000],
      ['FA3', 8175000]
    ]);

    this.options = {
      title: 'Performance in Categories for a subject',
      chartArea: {width: '50%'},
      hAxis: {
        // title: 'Value in USD',
        minValue: 0
      },
      vAxis: {
        // title: 'Members'
      }
    };

    this.chart = this.createBarChart(document.getElementById('chart_divEvolution'));
    this.chart.draw(this.data, this.options);
  }
}
