import { Component,OnInit,ViewChild } from '@angular/core';
import { GraphDrawComponent } from './graph-draw.component';
export class Input {
 constructor(
   public id: number,
   public column: string,
   public row: string,
 ) { }
}

@Component({
  selector: 'app-graph-input',
  templateUrl: './graph-input.component.html'
})
export class GraphInputComponent  implements OnInit{
   @ViewChild(GraphDrawComponent) alert: GraphDrawComponent;
  dropdownRowsList = [];
    selectedRowsItems = [];
    dropdownRowsSettings = {};
      dropdownColumnsList = [];
    selectedColumnsItems = [];
    dropdownColumnsSettings = {};
    ngOnInit(){
        this.dropdownRowsList = [
                              {"id":1,"itemName":"City"},
                              {"id":2,"itemName":"Students"},
                              {"id":3,"itemName":"row3"},
                              {"id":4,"itemName":"row4"},
                            ];
        this.selectedRowsItems = [
                                // {"id":2,"itemName":"user2"},
                                // {"id":3,"itemName":"user3"},
        
                            ];
        this.dropdownRowsSettings = { 
                                  singleSelection: false, 
                                  text:"Select Rows",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };

                                     this.dropdownColumnsList = [
                              {"id":1,"itemName":"Population"},
                              {"id":2,"itemName":"Class"},
                              {"id":3,"itemName":"column3"},
                              {"id":4,"itemName":"column4"},
                            ];
        this.selectedColumnsItems = [
                                // {"id":2,"itemName":"user2"},
                                // {"id":3,"itemName":"user3"},
        
                            ];
        this.dropdownColumnsSettings = { 
                                  singleSelection: false, 
                                  text:"Select Columns",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };            
    }
    onItemRowsSelect(item:any){
        this.alert.drawGraph();
    }
    OnItemRowsDeSelect(item:any){
      this.alert.drawGraph();
    }
    onRowsSelectAll(items: any){
      this.alert.drawGraph();
    }
    onRowsDeSelectAll(items: any){
      this.alert.drawGraph();
    }

    onItemColumnsSelect(item:any){
      this.alert.drawGraph();
    }
    OnItemColumnsDeSelect(item:any){
      this.alert.drawGraph();
    }
    onColumnsSelectAll(items: any){
      this.alert.drawGraph();
    }
    onColumnsDeSelectAll(items: any){
      this.alert.drawGraph();
    }
}
