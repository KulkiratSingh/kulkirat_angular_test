import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  transferForm: FormGroup = this.fb.group({
    fromAccount: ['', Validators.required],
    toAccount: ['', Validators.required],
    amount: ['', [Validators.required, Validators.min(1)]]
  });

  accounts: Account[] = [];
  transferSuccess: string = '';
  from_remaining_balance_message: string = ''
  to_remaining_balance_message: string = '';
  filteredToAccounts: Account[] = []; // Filtered list for "To Account"

  constructor(public fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts(); // Load accounts when component is initialized
    this.filteredToAccounts = this.accounts;

    this.transferForm.get('fromAccount')?.valueChanges.subscribe((selectedAccount) => {
      this.filteredToAccounts = this.accounts.filter(account => {
        return account.accountName !== selectedAccount
      });
   
      this.transferForm.get('toAccount')?.reset(); // Clear "To Account" selection when "From Account" changes
      this.checkAmount(this.transferForm.get('amount')?.value)
    })

    this.transferForm.get('amount')?.valueChanges.subscribe((amount: number) => {
      this.checkAmount(amount)
    })
    
  }


  checkAmount(amount: number) {
    const fromAccountName = this.transferForm.get('fromAccount')?.value;
    const fromAccount = this.accounts.find(account => account.accountName === fromAccountName);
    const enteredAmount = this.transferForm.get('amount')

    if (amount <= 0) {
      // Set an error if the amount is less than or equal to zero
      enteredAmount?.setErrors({ min: true });
    } else if (fromAccount && amount > fromAccount.initialBalance) {
      // Set an error if amount exceeds balance
      enteredAmount?.setErrors({ exceedsBalance: true });
    } else {
      // Clear any errors if all validations are met
      enteredAmount?.setErrors(null);
    }
  }

  onTransfer(): void {
    const { fromAccount, toAccount, amount } = this.transferForm.value;
    const accountsSelected = fromAccount && toAccount;
    const differentAccounts = fromAccount !== toAccount;
    const validAmount = amount > 0;
    const formValid = this.transferForm.valid;

    if (accountsSelected && differentAccounts && validAmount && formValid) {
      this.accountService.transferFunds(fromAccount, toAccount, amount);

      const fromAccountName = this.transferForm.get('fromAccount')?.value;
      const toAccountName = this.transferForm.get('toAccount')?.value;

      const formAccountBalance = this.accounts.find((fromAcc) => {
        return fromAcc.accountName === fromAccountName
      })?.initialBalance

      const toAccountBalance = this.accounts.find((ToAcc) => {
        return ToAcc.accountName === toAccountName
      })?.initialBalance

      this.transferSuccess = `Transferred <b>$${amount}</b> from <b>${fromAccountName}</b> to <b>${toAccountName}</b>.`;
      this.from_remaining_balance_message = `Remaining Balance In <b>${fromAccountName}</b> Account is <b>${formAccountBalance}</b>.`;
      this.to_remaining_balance_message = `Remaining Balance In <b>${toAccountName}</b> Account is <b>${toAccountBalance}</b>.`;
      

      this.transferForm.reset(); 
      this.transferForm.get('amount')?.setErrors(null);

      // Set timeout to clear success messages after 5 seconds
      setTimeout(() => {
        this.transferSuccess = '';
        this.from_remaining_balance_message = '';
        this.to_remaining_balance_message = '';
      }, 5000);
    } else {
      this.transferSuccess = 'Transfer failed. Check account details or balance.';
    }
  }

}
