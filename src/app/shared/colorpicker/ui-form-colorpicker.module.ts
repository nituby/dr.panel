import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UIFormColorpickerComponent } from './ui-form-colorpicker.component';
import { FormsModule } from '@angular/forms';
import { UIFormPickerModule } from '../picker/ui-form-picker.module';
import { UIFormColorModule } from '../color/ui-form-color.module';

@NgModule({
  imports: [ CommonModule, FormsModule, UIFormPickerModule, UIFormColorModule ],
  declarations: [ UIFormColorpickerComponent ],
  exports: [ UIFormColorpickerComponent ],
  entryComponents: [ UIFormColorpickerComponent ]
})
export class UIFormColorpickerModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: UIFormColorpickerModule, providers: [] };
  }
}
