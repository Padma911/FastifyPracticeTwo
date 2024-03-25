const {v4:uuidv4} =require('uuid')

let items = require('../items')

const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply)=>{
    const {id} = req.params;
     
    const item = items.find(item => item.id===id)
    console.log(item)
     
    reply.send(item)
}

const addItem = (req,reply) =>{
    const {name} = req.body;
console.log("name",name)
    const item ={
        id:uuidv4(),
        name
    }

    items = [...items,item]

    reply.code(201).send(item)
}


const deleteItem= (req,reply) => {
    const {id} = req.params;
    items = items.filter(each => each.id !==id)

    reply.send({message:`Item ${id} has been removed`})
}

const putItem = (req,reply) => {
    const {id} = req.params
    const {name } = req.body
    items = items.map(eachItem => {
        if (eachItem.id === id ){
eachItem.name =name
        } 
    })


    reply.send({message:`Item name ${name} has been updated `})
}

module.exports = {
    getItem,getItems,addItem,deleteItem,putItem
}