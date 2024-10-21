import { ServerResponse } from 'http';
import { users } from '../models/user';

export const getUsers = (res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
};
