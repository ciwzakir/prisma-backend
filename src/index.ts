import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/schema";
import { resolvers } from "./gql/resolvers";
import { PrismaClient } from "@prisma/client";
import { IContext } from "./gql/interface";
import { jwthelpers } from "./gql/utils/jwthelpers";

export const prisma = new PrismaClient();

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }): Promise<IContext> => {
      const userInfo = await jwthelpers.getDataFromToken(
        req.headers.authorization as string
      );
      // console.log("user Info  from main File", userInfo);
      return {
        prisma,
        userInfo,
      };
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
};
main();
