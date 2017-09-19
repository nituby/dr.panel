import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {DrService} from '../services/dr.service';

@Component({
  selector: 'app-graph-publish',
  templateUrl: './graph-publish.component.html',
})
export class GraphPublishComponent implements OnInit{
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    @Output() selectedUsers = new EventEmitter();
    constructor(private drService: DrService) {

    }
    ngOnInit(){
        this.drService.getUsers()
                           .subscribe(
                               users => {
                                console.log(users);
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
        this.dropdownList = [
                              {"itemName":"Admin SPK","id":"131891422"},
                              {"itemName":"Nupur Banerjee","id":"131902167"},
                              {"itemName":"Samita Chakraborty","id":"131902168"}
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
