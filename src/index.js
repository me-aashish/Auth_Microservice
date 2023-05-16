const express = require('express')

const { PORT } =  require('./config/serverConfig')
const app = express()

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index'); 



const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT, async() =>{
        const UserRepository = require('./repository/user-repository');
        const userRepositoryObj = new UserRepository();

        const response = await userRepositoryObj.getById(2);
        console.log(response);
    
        console.log(`Server Started on Port:  ${PORT}`)
    });
}

prepareAndStartServer()