const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { cmovies } = require('../lib/movies-data');
const { tmovies } = require('../lib/movies2-data');

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

  it('/t-movies should return a list of teen movies', async () => {
    const result = await request(app).get('/t-movies');
    const expected = tmovies.map((movie) => {
      return { title: movie.title, year: movie.year };
    });
    expect(result.body).toEqual(expected);
  });

  it('/c-movies/:id should return movie detail', async () => {
    const result = await request(app).get('/c-movies/1');
    const totoro = {
      id: '1',
      title: 'My Neighbor Totoro',
      url: 'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg',
      year: 1988,
      isAnimated: true,
      isAnime: true,
    };
    expect(result.body).toEqual(totoro);
  });

  afterAll(() => {
    pool.end();
  });
});
