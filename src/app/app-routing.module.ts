import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'accounts', 
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



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
