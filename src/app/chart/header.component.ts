import { Component } from '@angular/core';
import { MarkGraphService } from '../services/mark-graph.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private markGraphService: MarkGraphService) {

  }
  save() {
    console.log('saving.......');
     this.markGraphService.saveGraphOther({option: 'onSave', value: 'save'});
  }
}
