require('dotenv').config()

let port = process.env.SERVER_PORT || 4000
if(process.argv[2]){
    port = process.argv[2]
}


module.exports = {
    express: {
        port: parseInt(port)
    },
    graphQL: {
        path: '/graphql',
        folders: {
            schemas: 'types',
            resolvers: 'types'
        }
    }
}