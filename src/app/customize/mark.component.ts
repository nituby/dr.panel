import { Component } from '@angular/core';
import { MarkGraphService } from '../services/mark-graph.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
 // styleUrls: ['./app.component.scss']
})
export class MarkComponent {
  colorValue = 'green';
  selectedColor = '';

constructor(private markGraphService: MarkGraphService) { }


  selectColor(data) {
    // console.log(data);
    this.markGraphService.notifyOther({option: 'onChangeColor', value: data});
  }
} 
