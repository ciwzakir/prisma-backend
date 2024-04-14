const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./gql/schema");
const { resolvers } = require("./gql/resolvers");
const { PrismaClient } = require("@prisma/client");
const { jwthelpers } = require("./gql/utils/jwthelpers");

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const userInfo = await jwthelpers.getDataFromToken(
      req.headers.authorization
    );
    return {
      prisma,
      userInfo,
    };
  },
});

module.exports = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
