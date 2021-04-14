const express = require('express');
const membersBL = require('../models/membersBL');

const appRouter = express.Router();

appRouter.route('/')
    .get(async function(req,resp)
    {
        let members = await membersBL.getMembers();
        return resp.json(members);
    });

    appRouter.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let member = await membersBL.getMember(id);
        return resp.json(member);
    });

    appRouter.route('/')
    .post(async function(req,resp)
    {
        let newMember = req.body;
        let result = await membersBL.addNewMember(newMember);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .put(async function(req,resp)
    {
        let updatedMember = req.body;
        let id = req.params.id;
        let result = await membersBL.updateMember(id,updatedMember);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;
        let result = await membersBL.deleteMember(id);
        return resp.json(result);
    });
    module.exports = appRouter; 