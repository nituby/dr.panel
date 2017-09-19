import { Component} from '@angular/core';
declare var google:any;
@Component({
  selector: 'chart'
})
export class GoogleChartComponent {
  private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleChartComponent");
      this.loadGoogleGraph();
  }

  getGoogle() {
      return google;
  }


  loadGoogleGraph() {
        if(!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      console.log("DrawGraph base class!!!! ");
  }

  createBarChart(element:any):any {
      return new google.visualization.ColumnChart(element);
  }

  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }
}