import { FastifyReply, FastifyRequest } from 'fastify';

// eslint-disable-next-line import/prefer-default-export
export const getIndex = async (request: FastifyRequest, reply: FastifyReply) => reply.view('index');
