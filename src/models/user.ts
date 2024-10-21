import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const users: User[] = [
  {
    id: uuidv4(),
    username: 'Pablo',
    age: 101,
    hobbies: ['lock', 'stock', 'two smoking barrels']
  },
  {
    id: uuidv4(),
    username: 'Tony',
    age: 101,
    hobbies: ['football', 'hockey']
  }
];

export const findUserById = (userId: string): User | undefined => {
  return users.find(user => user.id === userId)
}