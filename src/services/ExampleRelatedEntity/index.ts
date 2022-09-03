import database from '../../lib/database';

export const findAll = () => database.exampleRelatedEntity.findMany({});

export const findOne = (id: number) => database.exampleRelatedEntity.findFirst({
  where: {
    id,
  },
});
