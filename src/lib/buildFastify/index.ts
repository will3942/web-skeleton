import createFastifyInstance, { FastifyServerOptions } from 'fastify';
import helmet, { FastifyHelmetOptions } from '@fastify/helmet';
import cors, { FastifyCorsOptions } from '@fastify/cors';
import view, { PointOfViewOptions } from '@fastify/view';
import Handlebars from 'handlebars';
import path from 'path';
import fastifyStatic, { FastifyStaticOptions } from '@fastify/static';

export interface BuildFastifyMiddlewareOptions {
  helmet?: {
    disable?: boolean;
  } & FastifyHelmetOptions;
  cors?: {
    disable?: boolean;
  } & FastifyCorsOptions;
  view?: {
    disable?: boolean;
  } & PointOfViewOptions;
  static?: {
    disable?: boolean;
  } & FastifyStaticOptions;
}

export interface BuildFastifyOptions {
  fastifyOptions?: FastifyServerOptions;
  middlewareOptions?: BuildFastifyMiddlewareOptions;
}

const buildFastify = (opts?: BuildFastifyOptions) => {
  const fastify = createFastifyInstance({
    logger: true,
    ...opts?.fastifyOptions,
  });

  // Content-Security-Policy middleware
  if (!opts?.middlewareOptions?.helmet?.disable) {
    fastify.register(helmet, {
      ...opts?.middlewareOptions?.helmet,
    });
  }

  // CORS (Cross-Origin-Request-Scripting) middleware
  if (!opts?.middlewareOptions?.cors?.disable) {
    fastify.register(cors, {
      ...opts?.middlewareOptions?.cors,
    });
  }

  // Templating engine middleware
  if (!opts?.middlewareOptions?.view?.disable) {
    fastify.register(view, {
      engine: {
        handlebars: Handlebars,
      },
      root: path.join(__dirname, '../../views'),
      layout: './layouts/main',
      viewExt: 'hbs',
      options: {},
      ...opts?.middlewareOptions?.view,
    });
  }

  // Static middleware
  if (!opts?.middlewareOptions?.static?.disable) {
    fastify.register(fastifyStatic, {
      root: path.join(__dirname, '../../../public'),
    });
  }

  return fastify;
};

export default buildFastify;
