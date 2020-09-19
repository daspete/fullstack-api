const PagecomponentProvider = require('./provider')

module.exports = {
    Query: {
        async Pagecomponents(root, args, context, info){
            return await PagecomponentProvider.Find()
        }
    },

    Pagecomponent: {
        
    }
    
}