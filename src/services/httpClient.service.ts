import axios from 'axios';

import { CLIENT_ID, CLIENT_SECRET, FINGER_PRINT } from '../config';
import { ExcecuteRequest, SubscriptionRequest } from '../types';

export const httpClient: ExcecuteRequest = async (endpoint, method, params, data, oauthKey) => {
  const response = await axios({
    method,
    url: `https://uat-api.synapsefi.com/v3.1/${endpoint}`,
    params,
    data,
    headers: {
      'X-SP-GATEWAY': `${CLIENT_ID}|${CLIENT_SECRET}`,
      'X-SP-USER-IP': '255.127.79.76',
      'X-SP-USER': `${oauthKey || ''}|${FINGER_PRINT}`,
      'content-type': 'application/json',
    }
  });

  if (!response.data) {
    return response;
  }

  return response.data;
};

export const subscriptionpClient: SubscriptionRequest = async (endpoint, method, data) => {
  const response = await axios({
    method,
    url: `https://uat-api.synapsefi.com/v3.1/subscriptions${endpoint}`,
    data,
    headers: {
      'X-SP-GATEWAY': `${CLIENT_ID}|${CLIENT_SECRET}`,
      'Host': 'uat-api.synapsefi.com',
      'content-type': 'application/json',
    }
  });

  if (!response.data) {
    return response;
  }

  return response.data;
};
