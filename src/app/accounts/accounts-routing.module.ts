import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { ViewAllAccountsComponent } from './view-all-accounts/view-all-accounts.component';

const routes: Routes = [
  { path: 'create-account', component: AccountCreationComponent } ,
  { path: 'view-all-accounts', component: ViewAllAccountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
