const DataProvider = require('../../providers/DataProvider')

class Provider extends DataProvider {
    constructor(collectionName){
        super(collectionName)
    }
}

const provider = new Provider('pagecomponents')

module.exports = provider