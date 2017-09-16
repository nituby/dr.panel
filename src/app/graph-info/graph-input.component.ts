import { Component } from '@angular/core';

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
export class GraphInputComponent {
  input = new Input(1,'City','Population');
  changeColumn() {
    console.log(this.input);
  }

  changeRow() {
    console.log(this.input);
  }
}
