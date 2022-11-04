const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { cmovies } = require('../lib/movies-data');

describe('movie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/c-movies should return a list of childhood movies', async () => {
    const result = await request(app).get('/c-movies');
    const expected = cmovies.map((movie) => {
      return { title: movie.title, year: movie.year };
    });
    expect(result.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
