import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UIFormColorComponent } from './ui-form-color.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ UIFormColorComponent ],
  exports: [ UIFormColorComponent ],
  entryComponents: [ UIFormColorComponent ]
})
export class UIFormColorModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: UIFormColorModule, providers: [] };
  }
}
