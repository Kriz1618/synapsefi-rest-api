import { subscriptionParams, updateSubscriptionParams } from '../types';
import { subscriptionpClient } from './httpClient.service';

export const createSubscription = async (params: subscriptionParams) => {  
  return await subscriptionpClient('', 'post', params );
};

export const getSubscriptions = async (subscriptionId?: string) => {
  const endpoint = subscriptionId ? `/${subscriptionId}` : '';
  return await subscriptionpClient(endpoint); 
};

export const updateSubscription = async (subscriptionId: string, params: updateSubscriptionParams) => {
  return await subscriptionpClient(`/${subscriptionId}`, 'patch', params); 
};

export const getSubscriptionLogs = async () => {
  return await subscriptionpClient('/logs'); 
};
