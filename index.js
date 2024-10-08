// import json-server

const jsonServer = require('json-server')

//create server

const mpServer = jsonServer.create()

//setup path for db.json file

const router = jsonServer.router("db.json")

//create middleware 

const middleware=jsonServer.defaults()

//define port for running json file

const PORT = 3000 || process.env.PORT //to get available port

//use middleware ,router

mpServer.use(middleware)
mpServer.use(router)

//run server in given port to resolve client request 

mpServer.listen(PORT,()=>{
    console.log(`MP Server has started at port ${PORT} and waiting for client request`);
    
})

