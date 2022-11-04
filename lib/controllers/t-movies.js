const { Router } = require('express');
const TeenMovie = require('../models/tmovie');

module.exports = Router()
  .get('/', async (req, res) => {
    const tMovies = await TeenMovie.getAll();
    const filtered = tMovies.map(({ title, year }) => ({ title, year }));
    res.json(filtered);
  })

  .get('/:id', async (req, res) => {
    const tMovie = await TeenMovie.getById(req.params.id);
    res.json(tMovie);
  });
