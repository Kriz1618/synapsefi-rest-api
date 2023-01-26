import { TransactionsParams } from "../types";
import { httpClient } from "./httpClient.service";


export const getUserTransactions = async (userId: string, params: TransactionsParams) => {
  console.log('6', '', );
  return await httpClient(`users/${userId}/trans`, 'get', params, null, params.oauth);
};

export const getNodeTransactions = async (userId: string, params: TransactionsParams) => {
  const { nodeId, transactioId, ...transParams } = params;
  let endpoint = `users/${userId}/nodes/${nodeId}/trans`;

  if (transactioId) {
    endpoint = `${transactioId}/${transactioId}`;
  }

  return await httpClient(endpoint, 'get', transParams, null, params.oauth);
};
