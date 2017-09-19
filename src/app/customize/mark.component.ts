import { Component } from '@angular/core';
import { MarkGraphService } from '../services/mark-graph.service';

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
    console.log(data);
    this.markGraphService.changeMessage(data);
    this.markGraphService.currentMessage.subscribe(selectedColor => this.selectedColor = selectedColor);
    console.log(this.selectedColor);
  }
}
