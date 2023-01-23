import { NodeData, NodeParams, UserBody, UserData, UserQuery } from "../types";
import { httpClient } from "./httpClient.service";
import { scope } from "../consts";


export const getUsers = async (userParams: UserQuery) => {
  const { page, pageSize, filter, showTokens } = userParams;

  const params: any = {
    page: page ? Number(page) : 1,
    per_page: pageSize ? Number(pageSize) : 10,
    show_refresh_tokens: showTokens || 'yes' 
  };

  if (filter) {
    params.filter = JSON.parse(filter)
  }

  return await httpClient('users', 'get', params);
};

export const getUser = async (userId: string, fullData: string) => {
  return await httpClient(`users/${userId}`, 'get', { full_dehydrate: fullData || 'no' });
}

export const createUser = async (params: UserBody) => {
  return await httpClient('users', 'post', null, params);
};

export const updateUserData = async (userId: string, params: UserData) => {
  const endpoint = `users/${userId}`;
  const oauthKey = params.oauth || await getOAuth(userId);

  return await httpClient(endpoint, 'patch', null, params, oauthKey);
};

export const createNode = async (userId: string, params: NodeData) => {
  const endpoint = `users/${userId}/nodes`;
  const oauthKey = params.oauth || await getOAuth(userId);
  console.log('40', 'oauthKey', oauthKey, userId);
  return await httpClient(endpoint, 'post', null, params, oauthKey);
};

export const getUserNodes = async (userId: string, params: any) => {
  const oauthKey = params.oauth || await getOAuth(userId);
  return await httpClient(`users/${userId}/nodes`, 'get', params, null, oauthKey);
};

export const updateNode = async (userId: string, nodeId: string, params: NodeParams) => {
  const endpoint = `users/${userId}/nodes/${nodeId}`;
  const oauthKey = params.oauth || await getOAuth(userId);
  console.log('53', 'oauthKey', oauthKey);
  return await httpClient(endpoint, 'patch', null, params, oauthKey);
};

const getOAuth = async (userId: string) => {
  const user = await getUser(userId, 'no');

  const identity = await httpClient(
    `oauth/${userId}`,
    'post',
    null,
    {
      refresh_token: user.refresh_token,
      scope
    }
  );

  if (!identity?.oauth_key) {
    throw 'Error getting oauth key';
  }

  return identity.oauth_key;
};