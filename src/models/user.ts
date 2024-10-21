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
    username: 'pablo',
    age: 101,
    hobbies: ['lock', 'stock', 'two smoking barrels']
  }
];
