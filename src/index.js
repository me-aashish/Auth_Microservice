const express = require('express')

const { PORT } =  require('./config/serverConfig')
const app = express()

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index'); 

const UserRepository = require('./repository/user-repository');


const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT, async() =>{
        const obj = new UserRepository();

        // const sx = await obj.getUserByEmail('aashish@admin.com');
        // console.log(sx);
        
        console.log(`Server Started on Port:  ${PORT}`)
    });
}

prepareAndStartServer()