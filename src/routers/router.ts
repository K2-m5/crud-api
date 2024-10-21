import { IncomingMessage, ServerResponse } from 'http';
import { getUserById, getUsers } from '../controllers/controllers';

enum RequestMethod {
  GET = 'GET'
};

enum RequestUrl {
  USERS = '/api/users',
  USER_BY_ID = '/api/user/id'
}

export const router = (req: IncomingMessage, res: ServerResponse) => {
  const urlParts = req.url?.split('/');
  const userId = urlParts?.[3];

  if (req.method === RequestMethod.GET && req.url === RequestUrl.USERS) {
    return getUsers(res);
  }

  if (req.method === RequestMethod.GET && urlParts?.[1] === 'api' && urlParts?.[2] === 'users' && userId) {
    return getUserById(res, userId);
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Resource not found' }));
};
