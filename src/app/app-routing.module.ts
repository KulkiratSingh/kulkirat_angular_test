import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'create-account', 
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) //lazy loading 
  },
  { path: 'transactions', 
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) 
  },
  { 
    path: '', component: HomeComponent 
  },
  { path: '**', redirectTo: '' } 
];


// const routes: Routes = [
//   { path: 'create-account', component: AccountCreationComponent },
//   { path: 'transactions/fund-transfer', component: FundTransferComponent },
//   { path: 'transactions/history', component: TransactionHistoryComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, 
//   { path: '**', redirectTo: '/not-found' } // Optional: handle unknown routes
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
