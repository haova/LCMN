import process from 'node:process';
import { createServer } from '@wal-li/server';

const server = createServer({
  host: '0.0.0.0',
  port: process.env.APP_PORT
});

server.get('/', () => ({ status: 200, body: 'Hello, world!' }));

await server.start();
