const fastify = require("fastify")({logger:true});


fastify.register(require('./routes/items'))




const start = async () => {
    try{
        await fastify.listen(3030)
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start ()