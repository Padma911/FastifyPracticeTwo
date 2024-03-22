const {getItem, getItems} = require('../controllers/items')

const itemSchema ={ type:'object',
properties:{
   id:{type:'integer'},
    name:{type:'string'}
}}

//Options for get all items



const getItemsOpts  = {
    schema: {
        response:{
            200: {
                type:'array',
                items: itemSchema
                }
            }
        },
        handler: getItems
    }


const getItemOpts  = {
    schema: {
        response:{
            200:itemSchema
        }
    },handler:getItem
}


function itemRoutes (fastify, options, done){

   //GET ALL ITEMS

    fastify.get('/items',getItemsOpts)
    
    // GET AN ITEM
    fastify.get('/items/:id',getItemOpts )

    done()
}

module.exports = itemRoutes