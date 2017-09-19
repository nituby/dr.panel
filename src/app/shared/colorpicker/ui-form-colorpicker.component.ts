import { Component, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import * as Color from 'color';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UIFormPickerComponent } from '../picker/ui-form-picker.component';


@Component({
  selector: 'ui-form-colorpicker',
  templateUrl: './ui-form-colorpicker.component.html',
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UIFormColorpickerComponent),
    multi: true,
  } ]
})
export class UIFormColorpickerComponent implements ControlValueAccessor {

  @Output() selected = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Input() height = '14';
  @Input() width = '16.05';
  @Input() disabledPicker = false;
  @Input() readOnlyPicker = false;

  @ViewChild('picker') picker: UIFormPickerComponent;

  selectedColor = '';

  constructor(protected renderer: Renderer2) {

  }

  private propagateChange = (_: any) => {
  }


  public writeValue(input: any) {
    this.selectedColor = input || '';

    if (this.selectedColor) {
      this.setPickerColor(this.selectedColor);
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  setPickerColor(color: string) {
    const colorToSet = color || '#FFFFFF';

    try {
      const colorObject = Color(colorToSet),
        oppositeRgb = colorObject.dark() ? '#FFF' : '#000'; // `rgb(${oppositeColor.r}, ${oppositeColor.g}, ${oppositeColor.b})`;
      this.renderer.setStyle(this.picker.placeHolderElement.nativeElement, 'background-color', colorToSet);
      this.renderer.setStyle(this.picker.placeHolderElement.nativeElement, 'color', oppositeRgb);
    } catch (e) {

    }
  }

  colorSelected(color: string) {
    this.selectedColor = color;
    this.propagateChange(this.selectedColor);
    this.selected.emit(color);

    this.setPickerColor(color);
    this.picker.hide();
  }

  colorChanged(color: string) {
    this.selectedColor = color;
    this.propagateChange(this.selectedColor);
    this.onChange.emit(this.selectedColor);

    this.setPickerColor(color);
  }

}
