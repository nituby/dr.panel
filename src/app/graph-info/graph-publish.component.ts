import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graph-publish',
  templateUrl: './graph-publish.component.html',
})
export class GraphPublishComponent implements OnInit{
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    @Output() selectedUsers = new EventEmitter();;
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"user1"},
                              {"id":2,"itemName":"user2"},
                              {"id":3,"itemName":"user3"},
                              {"id":4,"itemName":"user4"},
                            ];
        this.selectedItems = [
                                // {"id":2,"itemName":"user2"},
                                // {"id":3,"itemName":"user3"},
        
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select User",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };            
    }
    onItemSelect(item:any){
        this.selectedUsers.emit(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        this.selectedUsers.emit(this.selectedItems);
    }
    onSelectAll(items: any){
        this.selectedUsers.emit(this.selectedItems);
    }
    onDeSelectAll(items: any){
        this.selectedUsers.emit(this.selectedItems);
    }
}
