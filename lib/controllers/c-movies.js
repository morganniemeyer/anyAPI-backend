const { Router } = require('express');
const ChildhoodMovie = require('../models/movie');

module.exports = Router()
  .get('/', async (req, res) => {
    const cMovies = await ChildhoodMovie.getAll();
    const filtered = cMovies.map(({ title, year }) => ({ title, year }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const cMovie = await ChildhoodMovie.getById(req.params.id);
    res.json(cMovie);
  });
