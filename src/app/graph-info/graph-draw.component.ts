import { Component,Input } from '@angular/core';
import { GoogleChartComponent } from './google-chart.component';
import { MarkGraphService } from '../services/mark-graph.service';
@Component({
  selector: 'app-graph-draw',
  templateUrl: './graph-draw.component.html',
  // styleUrls: ['./graph-draw.component.scss']
})
export class GraphDrawComponent extends GoogleChartComponent{
  private options;
  private data;
  private chart;
  private dataTable = [
      ['Evolution', 'A1`'],
      ['FA1', 100],
      ['FA2', 100],
      ['FA3', 100]
    ];
  @Input() selectedRowsItems;
  @Input() selectedColumnsItems;
  cities = {"Banglore": 123, "Delhi": 150, "Agra":100,"Jaipur":50};
  students = {"IX": 123, "X": 150, "XI":100};
  constructor(private markGraphService: MarkGraphService){
    super();
  }
  
  setDataTable(data) {
    this.dataTable = [['Evolution', 'A1`']];
         Object.keys(data).forEach(element => {
            this.dataTable.push([element, data[element]]);
        });
        // console.log(this.dataTable);
  }

  drawGraph(){
    this.selectedRowsItems.forEach(row => {
    this.selectedColumnsItems.forEach(column => {
      if(row.itemName === 'City' && column.itemName === 'Population') {
        this.setDataTable(this.cities);
      }
      else if(row.itemName === 'Students' && column.itemName === 'Class') {
        this.setDataTable(this.students);
      }
       });
    });
    
    this.data = this.createDataTable(this.dataTable);

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

  selectUsers(data) {
    console.log(data);
  }
}
