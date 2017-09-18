import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

// import { Key } from '../../../../definitions/key';

export enum Key {
  Up = 38,
  Down = 40,
  Enter = 13,
  Escape = 27,
  Tab = 9
}

@Component({
  selector: 'ui-form-picker',
  styles: [ `.disabled-picker {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ,
  ` ],
  templateUrl: './ui-form-picker.component.html'
})
export class UIFormPickerComponent implements OnDestroy, OnInit {

  @Input() id: string;
  @Input() disabled = false;
  @Input() placeholderText = '';
  @Input() extraCssClass: string;
  @Input() pickerIcon = '/theme/assets/icons/form/chevron-down.svg';
  @Input() autoWidth = false;
  @Input() text = '';
  @Input() disabledPicker = false;
  @Input() readOnlyPicker = false;


  @ViewChild('picker') picker: ElementRef;
  @ViewChild('placeholder') placeHolderElement: ElementRef;

  public visible = false;
  pickerOnTop = false;
  pickerOnRight = false;

  protected eventHooksApplied = false;

  protected documentEvents: Function[] = [];

  static getElementPosition(element: any) {
    let xPos = 0, yPos = 0, el = element;
    const w = window;

    while (el) {
      if (el.tagName === 'BODY') {
        // deal with browser quirks with body/window/document and page scroll
        const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        const yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos,
      windowWidth: w.innerWidth,
      windowHeight: w.innerHeight
    };
  }

  ngOnInit() {
    if (this.disabledPicker === true) {
      this.disabled = true;
    }

  }

  getPosition(): any {
    return UIFormPickerComponent.getElementPosition(this.elementRef.nativeElement);
  }

  constructor(protected elementRef: ElementRef, private renderer: Renderer2) {

  }

  protected wire() {

    this.documentEvents.push(this.renderer.listen('document', 'click', (event: any) => {
      this.onDocumentClick(event.target);
    }));

    this.documentEvents.push(this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      this.onDocumentKeyPress(event);
    }));

    this.eventHooksApplied = true;
  }

  protected get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }


  protected onDocumentKeyPress(event: KeyboardEvent) {
    const which = event.which;

    if (which === Key.Escape || which === Key.Tab) {
      this.hide();
      event.preventDefault();
    }
  }

  protected onDocumentClick(target: HTMLElement) {
    if (this.visible && !this.element.contains(target)) {
      this.hide();
    }
  }

  protected setLocation() {
    const location = this.getPosition(),
      buffer = 10,
      pickerHeight = this.picker && this.picker.nativeElement ? this.picker.nativeElement.offsetHeight : 300,
      pickerWidth = this.picker && this.picker.nativeElement ? this.picker.nativeElement.offsetWidth : 300,
      chopsAtBottom = location.windowHeight < (location.y + pickerHeight + buffer),
      chopsAtRight = location.windowWidth < (location.x + pickerWidth + buffer);

    this.pickerOnTop = chopsAtBottom;
    this.pickerOnRight = chopsAtRight;
  }

  protected showPicker() {
    if (!this.eventHooksApplied) {
      this.wire();
    }

    setTimeout(() => this.setLocation(), 10);
  }

  protected hidePicker() {
    this.unwire();
  }

  onPlaceholderFocus(event: any) {
    this.show();
  }

  onPlaceholderBlur(event: any) {

  }

  show() {
    if (!this.visible && !this.disabledPicker && !this.readOnlyPicker) {
      this.setLocation();
      this.visible = true;
      this.showPicker();
    } else {
      this.hide();
    }
  }

  hide() {
    if (this.visible) {
      this.hidePicker();
      this.visible = false;
    }
  }

  ngOnDestroy() {
    this.unwire();
  }

  protected unwire() {
    if (this.documentEvents.length > 0) {
      let unRegister = null;
      while (unRegister = this.documentEvents.pop()) {
        unRegister();
      }

      this.eventHooksApplied = false;
    }
  }
}
