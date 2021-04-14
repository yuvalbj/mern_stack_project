const express = require('express');
const moviesBL = require('../models/moviesBL');

const appRouter = express.Router();

appRouter.route('/')
    .get(async function(req,resp)
    {
        let movies = await moviesBL.getMovies();
        return resp.json(movies);
    });

    appRouter.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let movie = await moviesBL.getMovie(id);
        return resp.json(movie);
    });

    appRouter.route('/')
    .post(async function(req,resp)
    {
        let newMovie = req.body;
        let result = await moviesBL.addNewMovie(newMovie);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .put(async function(req,resp)
    {
        let updatedMovie = req.body;
        let id = req.params.id;
        let result = await moviesBL.updateMovie(id,updatedMovie);
        return resp.json(result);
    });

    appRouter.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;
        let result = await moviesBL.deleteMovie(id);
        return resp.json(result);
    });
    module.exports = appRouter; 