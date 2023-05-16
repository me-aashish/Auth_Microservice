const express = require('express')

const { PORT } =  require('./config/serverConfig')
const app = express()

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index'); 

// const UserService = require('./services/user-service');


const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT, async() =>{
      
        // const service = new UserService();

        // const token = service.createToken({email : 'aashish@admin.com', id : '1'});
        // console.log(token);

        // const verification = service.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhc2hpc2hAYWRtaW4uY29tIiwiaWQiOiIxIiwiaWF0IjoxNjg0MjIwNzI3LCJleHAiOjE2ODQyMjQzMjd9.T3N5ioYgrTJPLIueYtBb3y8ijZ4gRg9OoI4d-tj5NYA');
        // console.log(verification);
    
        console.log(`Server Started on Port:  ${PORT}`)
    });
}

prepareAndStartServer()