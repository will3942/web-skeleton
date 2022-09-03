import buildFastify from './lib/buildFastify';
import routers from './routers';

const server = buildFastify();

server.register(routers);

const start = async () => {
  try {
    await server.listen({ host: '0.0.0.0', port: 3000 });
  } catch (e) {
    server.log.error(e);

    process.exit(1);
  }
};

start();
