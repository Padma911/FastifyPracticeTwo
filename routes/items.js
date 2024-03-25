const {getItem, getItems,addItem,deleteItem,putItem} = require('../controllers/items')

const itemSchema ={ type:'object',
properties:{
   id:{type:'string'},
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

const addItemOpts  = {
    schema: {
        body:{
type:'object',
required:['name'],
properties:{
    name:{
        type:"string"
    }
}
        },
        response:{
            201:itemSchema
        }
    },
    handler:addItem,
}

const deleteItemOpts ={
    schema : {

        response:{
            200: {
                type:'object',
                properties: {
                   
                    message: {type:'string'}
                }
            }
        },
       
    }, handler:deleteItem
}

const putItemOpts={
    schema : {
        response:{
            200:{
                type:'object',
                properties:{message:{type:'string'}}

            }
        }
    },handler:putItem
}


function itemRoutes (fastify, options, done){

   //GET ALL ITEMS

    fastify.get('/items',getItemsOpts)
    
    // GET AN ITEM
    fastify.get('/items/:id',getItemOpts )

    //ADD ITEM 
    fastify.post('/items', addItemOpts)

    //DELETE ITEM 
    fastify.delete('/items/:id', deleteItemOpts)

    //PUT ITEM
    fastify.put("/items/:id", putItemOpts)

    done()
}

module.exports = itemRoutes