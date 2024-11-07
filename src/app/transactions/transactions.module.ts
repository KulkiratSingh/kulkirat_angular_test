import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FundTransferComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
