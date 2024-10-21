import http from 'http';
import dotenv from 'dotenv';
import { router } from './routers/router';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});