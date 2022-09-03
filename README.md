# Skeleton TypeScript Web Project

This is a skeleton TypeScript web project using Fastify, Prisma and Handlebars.

I use this for quick prototyping of side-projects and so there are a few caveats:
- You won't get any example testing setup out of the box
- The project is very opinionated to my specific needs and so will likely need to be tweaked to work for others

## Usage

1. Checkout the repository
2. Clone the `.env.example` file to `.env` adjusting for your needs
3. Execute `yarn` to install the dependencies
4. Execute `yarn prisma:generate-client` to generate a typed database client
5. Execute `yarn prisma:migrate-dev` to migrate and setup the development database
6. Execute `yarn start` to start the HTTP server

## Usage in production

Follow the development steps except for changing step 5 to execute `yarn prisma:migrate-prod` instead.

## Development

The database schema can be adjusted in `src/lib/database/schema.prisma`.

After adjusting the database schema you can run:
- `yarn prisma:format-schema` to validate the schema
- `yarn prisma:generate-client` to update the typed database client
- `yarn prisma:migrate-dev` to run the migrations

Linting can be ran with `yarn lint` and will also be ran automatically pre-commit.