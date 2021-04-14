const express = require('express');
const usersBL = require('../models/usersBL');

const appRouter = express.Router();

appRouter.route('/')
    .get(async function(req,resp)
    {
        let users = await usersBL.getUsers();
        return resp.json(users);
    });

    appRouter.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let user = await usersBL.getUser(id);
        return resp.json(user);
    });

    appRouter.route('/')
    .post(async function(req,resp)
    {
        let newUser = req.body;
        let result = await usersBL.addNewUser(newUser);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .put(async function(req,resp)
    {
        let updatedUser = req.body;
        let id = req.params.id;
        let result = await usersBL.updateUser(id,updatedUser);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;
        let result = await usersBL.deleteUser(id);
        return resp.json(result);
    });
    module.exports = appRouter; 