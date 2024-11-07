import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account';
import { TransactionHistory } from '../interfaces/transaction-history';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [];
  private transactions: TransactionHistory[] = [];

  constructor() { 
    // Load accounts and transactions from localStorage
    const savedAccounts = localStorage.getItem('accounts');
    this.accounts = savedAccounts ? JSON.parse(savedAccounts) : [];

    const savedTransactions = localStorage.getItem('transactions');
    this.transactions = savedTransactions ? JSON.parse(savedTransactions) : [];
  }

  addAccount(account: Account): void {
    this.accounts.push(account);
    this.saveAccounts(); // Save to localStorage. I have to do this because we don't have a backend so for now using localStorage
  }

  private saveAccounts(): void {
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

  private saveTransactionHistory(fromAccount: Account, fromAccountName: string, amount: number) {
    this.transactions.push({
      account: fromAccountName,
      amountTransfered: amount, 
      remainingBalance: fromAccount.initialBalance,
      accountType: fromAccount.accountType,
      dateOfTransaction: new Date()
    });

    localStorage.setItem('transactions', JSON.stringify(this.transactions))

  }

  getAccounts(): Account[] {
    console.log('Accounts:', this.accounts);
    return this.accounts;
  }
  

  getTransactionHistory(): TransactionHistory[] {
    return this.transactions;
  }

  transferFunds(fromAccountName: string, toAccountName: string, amount: number): boolean {
    const fromAccount = this.accounts.find(acc => acc.accountName === fromAccountName);
    const toAccount = this.accounts.find(acc => acc.accountName === toAccountName);

    // Check if both accounts exist and if the transfer amount is valid
    if (fromAccount && toAccount && fromAccount.initialBalance >= amount) {
      fromAccount.initialBalance -= amount;
      toAccount.initialBalance += amount;
      this.saveAccounts(); 
      this.saveTransactionHistory(fromAccount, fromAccountName, amount); 

      return true;
    }
    return false; 
  }


}
