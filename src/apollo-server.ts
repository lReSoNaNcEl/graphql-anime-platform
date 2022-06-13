import {Server} from "http";
import {ApolloServer} from "apollo-server-express";
import typeDefs from "./graphql/types";
import resolvers from "./graphql/resolvers";
import {ApolloServerPluginDrainHttpServer} from "apollo-server-core";

export const createApolloServer = (httpServer: Server): ApolloServer => {
    return new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    })
}