import { Component } from '@angular/core';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
})
export class MeasureComponent {
  population:string = 'Population';
   	private itemsToDrop:Array<Object> = [
		{
			name: 'Item to drop 1',
			content: 'desctiption 1'
		},
		{
			name: 'Item to drop 2',
			content: 'desctiption 2'
		},
		{
			name: 'Item to drop 3',
			content: 'desctiption 3'
		},
	]

    private releaseDrop(event){
  	let index = this.itemsToDrop.indexOf(event);
  	if (index >= 0){
  		this.itemsToDrop.splice(index,1);
  	}
  }
}
