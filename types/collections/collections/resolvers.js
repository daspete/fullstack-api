const CollectionProvider = require('./provider')
const PagecomponentProvider = require('../../pagecomponents/provider')
const Sleep = require('../../../utils/Sleep')

module.exports = {
    Query: {
        async Collections(args){
            return await CollectionProvider.Find()
        },

        async CollectionByPermalink(root, args){
            const collection = await CollectionProvider.FindOne({ filter: { type: 'page', status: 'published', pagecomponents: { $exists: true } } })
            console.log('query')
            return collection
        }
    },

    Collection: {
        async pagecomponents(parent, args, context){
            let pagecomponents = []

            for(let i = 0; i < parent.pagecomponents.length; i++){
                pagecomponents.push(await PagecomponentProvider.FindById(parent.pagecomponents[i]))
            }

            return pagecomponents
        }
    }
    
}