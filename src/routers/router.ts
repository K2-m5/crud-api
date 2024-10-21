import { IncomingMessage, ServerResponse } from 'http';
import { getUsers } from '../controllers/controllers';

enum RequestMethod {
  GET = 'GET'
};

enum RequestUrl {
  USERS = '/api/users'
}

export const router = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === RequestMethod.GET && req.url === RequestUrl.USERS) {
    return getUsers(res);
  }
};
