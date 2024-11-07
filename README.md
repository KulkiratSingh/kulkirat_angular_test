# Kulkirat's Angular Banking System Take-Home Test

## Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.


This is a banking transactions web application built with Angular (v14), demonstrating basic banking operations such as creating accounts, transferring funds between accounts, and viewing transaction history. The application is styled with Bootstrap and includes a responsive design, enabling users to manage their accounts, view recent transactions, and perform fund transfers.

This project was completed as part of a take-home assignment for BrainRidge Consulting Inc. showcasing the implementation of common banking features and UI practices in Angular.

## Features

- **Account Management**: Users can open new accounts with types like "Chequing" and "Savings."
- **Fund Transfer**: Users can transfer funds between their accounts with automatic balance updates.
- **Transaction History**: Users can view a history of their transactions, with options to filter by account.
- **Responsive Design**: Fully responsive UI using Bootstrap 5, compatible across different screen sizes.

## Technology Stack

- **Framework**: Angular 14
- **Styling**: Bootstrap 5, Bootstrap Icons
- **Icons**: Bootstrap Icons for simple and clean iconography
- **Dependency Management**: Node.js and npm

## Prerequisites

- **Node.js**: Ensure that Node.js (v18.19.0 or compatible) is installed. You can download it from [Node.js official website](https://nodejs.org/).
- **Angular CLI (optional)**: If you prefer using the Angular CLI for additional commands, you can install it globally:

  ```bash
  npm install -g @angular/cli@14.2.13
  ```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/banking-app.git
cd banking-app
```

### 2. Install Dependencies

Use npm to install the project's dependencies.

```bash
npm install
```

### 3. Run the Application

To start the Angular development server:

```bash
npm start
```

This will start the app locally on `http://localhost:4200/`. You can view the application by opening this URL in your browser.

### 4. Build the Application (for Production) (Optional Step)

To build the application for production:

```bash
npm run build
```

This will generate the production-ready files in the `dist/` folder.


## Folder Structure

- **/src/app/accounts**: Module related to account management, which includes account creation and viewing all accounts.
- **/src/app/transactions**: Module for fund transfer and transaction history.
- **/src/app/shared**: Reusable shared components like custom buttons.
- **/src/app/home**: Home page component.
- **/src/services**: Contains a service file called `account.service.ts`. This file is used for adding/retrieving accounts, transactions, transferred funds
- **/src/interfaces**: Contains interfaces for the app

## Usage

### Opening an Account

1. Note - PLEASE NOTE that by default an account named - Demo Account Default is created when the app first loads.
2. From the home screen, click on the **Open An Account** button.
3. Fill in the required details (Account Name, Initial Balance, Account Type) and submit the form.
4. Upon successful account creation, you’ll see a success message with a link to go back to the home screen.

### Transferring Funds

1. From the home screen, click on the **Transfer Funds** button.
2. Select a **From Account** and a **To Account**, then enter an amount to transfer.
3. The system validates the transfer amount against the account’s balance. If successful, the balances will update, and a success message will display.
4. Also if there is only one account then To Account dropbox will show an error saying: `No other accounts available for transfer. Create a new account`
5. If Amount is not > 0, then an error message is shown 
6. If Transfer amount exceeds the balance of the selected account an    `Error message` is shown

### Viewing Transaction History

1. From the home screen, click on the **Transaction History** button.
2. You’ll see a list of recent transactions for all accounts. Use the dropdown to filter transactions by a specific account.
3. If no transactions are found for the selected account, a message will display to inform the user.

### See All Accounts 

1. From the home screen, click on the **See All Accounts** button.
2. You’ll see a list of all accounts created in the app displayed in cards with a button on page to go back to home.


## Dependencies

Key dependencies in `package.json`:

- `@angular/animations`: Angular animations support.
- `@angular/forms`: Angular forms library for template-driven and reactive forms.
- `@ng-bootstrap/ng-bootstrap`: Angular integration for Bootstrap.
- `bootstrap`: CSS framework for responsive design.
- `rxjs`: Reactive programming library.
- `zone.js`: For Angular’s change detection.

## Development Dependencies

Key devDependencies in `package.json`:

- `@angular-devkit/build-angular`: CLI tool for building Angular projects.
- `typescript`: TypeScript compiler.

## Troubleshooting

1. **Error: Unsupported Node.js Version**: If you encounter an unsupported Node.js version error, ensure you are using Node v18.19.0 or compatible.
   
2. **Port Conflict**: If port `4200` is already in use, you can specify a different port:

   ```bash
   ng serve --port 4300
   ```

## Screenshots

### Home Screen
Displays options to open an account, transfer funds, view transaction history, and see all accounts.

![image](https://github.com/user-attachments/assets/3727d25c-69b1-4edd-b641-a373d42b12d6)


### Account Creation
Form to open a new account with validation and success messages.

<img width="1327" alt="image" src="https://github.com/user-attachments/assets/fff225d4-b50f-4e1f-9fdd-a677f27bc3a2">
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/e850d69d-2ec8-428b-a747-9567b7c7271c">



### Fund Transfer
Interface to select accounts and transfer funds with validations for balance checks.

<img width="1342" alt="image" src="https://github.com/user-attachments/assets/e4652892-3e7b-417b-b78b-30eeaddfc696">
<img width="1402" alt="image" src="https://github.com/user-attachments/assets/a6df88da-02ea-468f-904b-18f39969e169">
<img width="1338" alt="image" src="https://github.com/user-attachments/assets/5fe61d51-a0b2-479a-ad04-af853a72761c">


### Transaction History
Lists all transactions with filtering options to view specific account transactions.

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/2726d6ac-a0ee-4c81-a136-912e21f513e7">



Developed by `Kulkirat Singh`
