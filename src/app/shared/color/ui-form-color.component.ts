import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Colors } from './colors';


@Component({
  selector: 'ui-form-color',
  templateUrl: './ui-form-color.component.html',
  styles: [ `.disabled-color {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .disabled-color div {
    pointer-events: none;
  }
  ` ],

  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UIFormColorComponent),
    multi: true,
  } ]
})
export class UIFormColorComponent implements ControlValueAccessor {


  @Output() selected = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Input() height = '14';
  @Input() width = '16.05';
  @Input() standalone = true;
  colors = Colors.COLORS;
  selectedColor = '';
  @Input() disabled = false;
  @Input() readonly = false;


  private propagateChange = (_: any) => {
  }

  public writeValue(input: any) {
    this.selectedColor = input;
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  colorSelected(color: string[]) {
    if (!this.disabled && !this.readonly) {
      this.selectedColor = color[ 0 ];
      this.propagateChange(this.selectedColor);
      this.selected.emit(this.selectedColor);
    }
  }

  getColorBoxWidth() {
    return this.width + 'rem';
  }

  getPaletteWidth() {
    return (parseFloat(this.width) / 14) + 'rem';
  }

  getPaletteHeight() {
    return (parseFloat(this.height) / 14) + 'rem';
  }

  getInputWidth() {
    return (parseFloat(this.width) - 5) + 'rem';
  }

  colorChanged() {
    this.propagateChange(this.selectedColor);
    this.onChange.emit(this.selectedColor);
  }

}
