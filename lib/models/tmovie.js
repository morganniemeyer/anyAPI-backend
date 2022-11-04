const pool = require('../utils/pool');
module.exports = class TeenMovie {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.url = row.url;
    this.year = row.year;
    this.isAnimated = row.is_animated;
    this.isAnime = row.is_anime;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from teen_movies');
    return rows.map((tmovieRow) => new TeenMovie(tmovieRow));
  }
};
