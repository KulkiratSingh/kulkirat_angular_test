import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accounts: Account[] = [];
  showAllAccounts: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
      // Load default accounts if none exist
      this.accounts = this.accountService.getAccounts();
      if (this.accounts.length === 0) {
        //creating a dummy account on load if none is created
        this.accountService.addAccount({ accountName: 'Demo Account Default', initialBalance: 5000, accountType: 'Chequing' })
        this.accounts = this.accountService.getAccounts();
      }
   
      this.showAllAccounts = this.accounts.length > 3; //for show more button
  }

  // createDummyAccounts(): void {
  //   const defaultAccounts: Account[] = [
  //     { accountName: 'Chequing Account', initialBalance: 5000, accountType: 'Chequing' },
  //     { accountName: 'Savings Account', initialBalance: 10000, accountType: 'Savings' }
  //   ];
  //   defaultAccounts.forEach(account => this.accountService.addAccount(account));
  // }

}
