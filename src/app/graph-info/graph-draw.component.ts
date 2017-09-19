import { Component,Input,OnInit } from '@angular/core';
import { GoogleChartComponent } from './google-chart.component';
import { MarkGraphService } from '../services/mark-graph.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-graph-draw',
  templateUrl: './graph-draw.component.html',
  // styleUrls: ['./graph-draw.component.scss']
})
export class GraphDrawComponent extends GoogleChartComponent implements OnInit{
  private options;
  private data;
  private chart;
  private selectedUsers;
  public userError = false;
  selectedColor = 'blue';
  private dataTable = [
      ['Evolution', 'A1`'],
      ['FA1', 100],
      ['FA2', 100],
      ['FA3', 100]
    ];
  @Input() selectedRowsItems;
  @Input() selectedColumnsItems;
   private subscription: Subscription;
   private subscriptionSave: Subscription;
  cities = {"Banglore": 123, "Delhi": 150, "Agra":100,"Jaipur":50};
  students = {"IX": 123, "X": 150, "XI":100};
  constructor(private markGraphService: MarkGraphService){
    
    super();
    // console.log("constr");
  }

 ngOnInit() {
    this.subscription = this.markGraphService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'onChangeColor') {
        this.selectedColor = res.value;
        this.drawGraph();
      }
    });

       this.subscriptionSave = this.markGraphService.saveGraphObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'onSave') {
          this.saveGraph();
      }
    });
  }

  
  setDataTable(data) {
    this.dataTable = [['Evolution', 'A1`']];
         Object.keys(data).forEach(element => {
            this.dataTable.push([element, data[element]]);
        });
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
        minValue: 0,
        
      },
      vAxis: {
        // title: 'Members'
      },
      colors:[this.selectedColor]
    };

    this.chart = this.createBarChart(document.getElementById('chart_divEvolution'));
    this.chart.draw(this.data, this.options);
  }

  selectUsers(data) {
    this.selectedUsers = data;
  }

  saveGraph() {
    if(this.selectedUsers !== undefined) {
      this.userError = false;
        // console.log("saving graph");
    } else {
      this.userError = true;
    }
  }
}
