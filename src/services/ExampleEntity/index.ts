import { ExampleEntity } from '@prisma/client';
import database from '../../lib/database';

export const findAll = () => database.exampleEntity.findMany({});

export const findOne = (id: number) => database.exampleEntity.findUniqueOrThrow({
  where: {
    id,
  },
});

export const findAllRelatedEntities = (entity: ExampleEntity) => findOne(entity.id).relatives();
