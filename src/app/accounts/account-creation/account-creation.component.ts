import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Account } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {
  accountForm = this.fb.group({
    accountName: ['', [ Validators.required ]],
    initialBalance: [0, [Validators.required, Validators.min(1)]],
    accountType: ['Chequing', Validators.required]
  });

  accounts: Account[] = [];
  accountCreated: boolean = false; 
  
  //using NonNullableFormBuilder instead of FormBuilder becuase to reset form its initial value. This will cause the control to reset to its initial value, instead of null on submit. as docs says - https://v17.angular.io/api/forms/FormBuilder#properties
  constructor(private fb: NonNullableFormBuilder, private accountService: AccountService) {}


    ngOnInit(): void {}

    onSubmit(): void {


    if (this.accountForm.valid) {
      const newAccount: Account = this.accountForm.value as Account;
      this.accountService.addAccount(newAccount); // created a service to store account details using localStorage as there is no backend for this test.
      this.accountCreated = true;
      this.accountForm.reset();
    } else {
      this.accountForm.markAllAsTouched(); //to show errors on submit
    }

  }

}
