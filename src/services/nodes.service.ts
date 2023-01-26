import { NodeBarcodeParams, NodeData, NodeParams } from "../types";
import { httpClient } from "./httpClient.service";

export const createNode = async (userId: string, params: NodeData) => {
  const endpoint = `users/${userId}/nodes`;
  return await httpClient(endpoint, 'post', null, params,  params.oauth);
};

export const getUserNodes = async (userId: string, params: any, oauth: string) => {
  return await httpClient(`users/${userId}/nodes`, 'get', params, null, oauth);
};

export const updateNode = async (userId: string, nodeId: string, params: NodeParams) => {
  const endpoint = `users/${userId}/nodes/${nodeId}`;
  return await httpClient(endpoint, 'patch', null, params,  params.oauth);
};

export const createEcashBarcode = async (params: NodeBarcodeParams) => {
  const { amount, currency, nodeId, oauth, retailerId, userId } = params;
  const endpoint = `users/${userId}/nodes/${nodeId}/barcode`;
  const body = {
    amount:{ amount, currency },
    retailer_id: retailerId
  };

  return await httpClient(endpoint, 'post', null, body, oauth);
};

export const getCryptoQuotes = async () => {
  return await httpClient('nodes/crypto-quotes');
};

export const getNodeTypes = async () => {
  return await httpClient('nodes/types');
};
