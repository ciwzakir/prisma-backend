"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./gql/schema");
const resolvers_1 = require("./gql/resolvers");
const client_1 = require("@prisma/client");
const jwthelpers_1 = require("./gql/utils/jwthelpers");
exports.prisma = new client_1.PrismaClient();
const port = Number(process.env.PORT || 4000);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port },
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            const userInfo = yield jwthelpers_1.jwthelpers.getDataFromToken(req.headers.authorization);
            return {
                prisma: exports.prisma,
                userInfo,
            };
        }),
    });
    console.log(` Server ready at: ${url}`);
});
main();
