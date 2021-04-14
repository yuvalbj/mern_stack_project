const express = require('express');
var cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json());

require('./configs/database');

app.use(cors());

const usersController = require('./controllers/userController');
const moviesController = require('./controllers/movieController')
const membersController = require('./controllers/memberController')
const subscriptionsController = require('./controllers/subscriptionsController')
app.use('/api/users', usersController);
app.use('/api/movies', moviesController);
app.use('/api/members', membersController);
app.use('/api/subscriptions', subscriptionsController);



app.listen(8000);

console.log("Server is up");