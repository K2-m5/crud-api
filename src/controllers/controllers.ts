import { ServerResponse } from 'http';
import { findUserById, users } from '../models/user';
import { validate } from 'uuid';

export const getUsers = (res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
};

export const getUserById = (res: ServerResponse, userId: string) => {
  console.log(validate(userId));

  if (!validate(userId)) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Invalid user ID' }));
    return;
  }

  const user = findUserById(userId);
  if (!user) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(user));
};
