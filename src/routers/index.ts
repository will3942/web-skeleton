import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getIndex } from '../controllers';

const indexRouter: FastifyPluginAsync = async (
  fastify: FastifyInstance,
) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getIndex,
  });
};

const routers: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  await fastify.register(indexRouter);

  // Add other routers here
};

export default routers;
