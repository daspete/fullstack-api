const { ApolloServer } = require('apollo-server-express')
const express = require('express')

const LoadGraphQLSchemas = require('../../utils/LoadGraphQLSchemas')
const LoadGraphQLResolvers = require('../../utils/LoadGraphQLResolvers')

class Server {
    constructor(config){
        this.config = config

        this.expressServer = express()

        this.graphServer = null
    }

    StartGraphQLServer(){
        const typeDefs = LoadGraphQLSchemas(this.config.graphQL.folders.schemas)
        const resolvers = LoadGraphQLResolvers(this.config.graphQL.folders.resolvers)

        this.graphServer = new ApolloServer({
            typeDefs,
            resolvers
        }).applyMiddleware({ 
            app: this.expressServer,
            path: this.config.graphQL.path
        })
    }

    StartExpressServer(){
        this.expressServer.listen({ port: this.config.express.port })
    }
}

module.exports = Server