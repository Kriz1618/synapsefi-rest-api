import { UserBody, UserData, UserQuery } from "../types";
import { httpClient } from "./httpClient.service";
import { scope } from "../constants";


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
  return await httpClient(endpoint, 'patch', null, params, params.oauth);
};

export const generateUserOAuth = async (userId: string) => {
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
