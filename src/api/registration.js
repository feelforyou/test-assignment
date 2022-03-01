import { APP_DOMAIN } from '../config';

export const registerApiCreator = user =>
  fetch(`${APP_DOMAIN}users/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  });
