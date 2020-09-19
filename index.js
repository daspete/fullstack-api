const Server = require('./services/Server')
const serverConfig = require('./config/server')

const server = new Server(serverConfig)
server.StartGraphQLServer()
server.StartExpressServer()