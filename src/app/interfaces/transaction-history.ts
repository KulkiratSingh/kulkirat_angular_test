export interface TransactionHistory {
    account: string; //fromAccounts
    amountTransfered: number;
    remainingBalance: number;
    accountType: string;
    dateOfTransaction: Date;
  }