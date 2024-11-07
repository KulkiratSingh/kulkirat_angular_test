import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from 'src/app/interfaces/transaction-history';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  transactions: TransactionHistory[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.transactions = this.accountService.getTransactionHistory();
    console.log(this.transactions)
  }

}
