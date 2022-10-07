import type { OperationsType } from "background/provider/operations";

export interface TransactionToken {
  decimals: number;
  symbol: string;
  base58: string;
}

export interface SignMessageParams {
  message: string;
  uuid: string;
  title: string;
  icon: string;
  hash?: string;
}

export interface SignedMessage {
  publicKey: string;
  signature: string;
  message: string;
}


export interface MinTransactionParams {
  amount: number;
  gasPrice: number;
  gasLimit: number;
  toAddr: string;
  type: OperationsType;
  token: TransactionToken;
  //
  icon?: string;
  uuid?: string;
  title?: string;
  domain?: string;
  func?: string;
  code?: string;
  params?: string;
}

export interface ConfirmParams extends MinTransactionParams {
  tokenAmount: string;
  fee: number;
  recipient: string;
}

export interface HistoryTransaction {
  type: OperationsType;
  token: TransactionToken;
  fee: number;
  gasLimit: number;
  gasPrice: number;
  toAddr: string;
  from: string;
  hash: string;
  tokenAmount: string;
  timestamp: number;
  recipient: string;
  amount: number;
  expiryPeriod: number;
  nextSlot: number;
  period: number;
  confirmed: boolean;
  success: boolean;
  code?: string;
  params?: string;
  func?: string;
  icon?: string;
  title?: string;
  error?: string;
}
