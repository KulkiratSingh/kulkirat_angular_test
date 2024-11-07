import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from 'src/app/interfaces/transaction-history';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/interfaces/account';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  accounts: Account[] = [];
  transactions: TransactionHistory[] = [];
  filteredTransactions: TransactionHistory[] = [];
  selectedAccount: string = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    // Fetch accounts and transaction history on load
    this.accounts = this.accountService.getAccounts();
    this.transactions = this.accountService.getTransactionHistory();

    // Show all transactions by default
    this.filteredTransactions = [...this.transactions];
  }

  onAccountChange(): void {
    if (this.selectedAccount) {
      // Filter transactions by the selected account
      this.filteredTransactions = this.transactions.filter(
        transaction => transaction.account === this.selectedAccount
      );
    } else {
      // Show all transactions if no account is selected
      this.filteredTransactions = [...this.transactions];
    }
  }
}
