import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UIFormPickerComponent } from './ui-form-picker.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ UIFormPickerComponent ],
  exports: [ UIFormPickerComponent ],
  entryComponents: [ UIFormPickerComponent ]
})
export class UIFormPickerModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: UIFormPickerModule, providers: [] };
  }
}
