import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountCreationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
