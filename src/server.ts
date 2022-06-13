import express, {Express} from 'express'
import {ApolloServer} from "apollo-server-express";
import {createServer, Server} from 'http'
import {createApolloServer} from "./apollo-server";

export const startServer = async () => {

    const app: Express = express()
    const httpServer: Server = createServer(app)
    const apolloServer: ApolloServer = createApolloServer(httpServer)

    await apolloServer.start()
    apolloServer.applyMiddleware({app})

    await httpServer.listen(process.env.PORT || 3000)
}