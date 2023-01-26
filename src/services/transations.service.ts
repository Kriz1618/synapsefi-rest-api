import { batchTransactiosParams, TransactionParams, TransactionsParams, updateTransactioParams } from "../types";
import { httpClient } from "./httpClient.service";


export const getUserTransactions = async (params: TransactionsParams) => {
  const { userId, oauth, ...transParams } = params;
  return await httpClient(`users/${userId}/trans`, 'get', transParams, null, oauth);
};

export const getNodeTransactions = async (params: TransactionsParams) => {
  const { userId, nodeId, transactioId, oauth, ...transParams } = params;
  let endpoint = `users/${userId}/nodes/${nodeId}/trans`;

  if (transactioId) {
    endpoint = `${transactioId}/${transactioId}`;
  }

  return await httpClient(endpoint, 'get', transParams, null, oauth);
};

export const createTransaction = async (transactionParams: TransactionParams) => {
  const { userId, nodeId, oauth, ...params } = transactionParams;
  const endpoint = `users/${userId}/nodes/${nodeId}/trans`;
 
  return await httpClient(endpoint, 'post', null, params, oauth);
};

export const createBatchTransactions = async (transactions: batchTransactiosParams) => {
  const { userId, nodeId, oauth, ...params } = transactions;
  const endpoint = `users/${userId}/nodes/${nodeId}/batch-trans`;
 
  return await httpClient(endpoint, 'post', null, params, oauth);
};

export const cancelTransaction = async (transactionId: string, params: updateTransactioParams) => {
  const { userId, nodeId, oauth } = params;
  const endpoint = `users/${userId}/nodes/${nodeId}/trans/${transactionId}`;

  return await httpClient(endpoint, 'delete', null, null, oauth);
};

export const retryTransaction = async (transactionId: string, params: updateTransactioParams) => {
  const { userId, nodeId, oauth } = params;
  const endpoint = `users/${userId}/nodes/${nodeId}/trans/${transactionId}`;

  return await httpClient(endpoint, 'patch', null, { retry_transaction: true }, oauth);
};
