import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'history', component: TransactionHistoryComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
