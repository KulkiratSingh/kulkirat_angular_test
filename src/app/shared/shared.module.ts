import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';



@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomButtonComponent] // Exporting so it can be used in other modules
})
export class SharedModule { }
