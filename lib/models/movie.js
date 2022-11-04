const pool = require('../utils/pool');
module.exports = class ChildhoodMovie {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.url = row.url;
    this.year = row.year;
    this.isAnimated = row.is_animated;
    this.isAnime = row.is_anime;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from childhood_movies');
    return rows.map((cmovieRow) => new ChildhoodMovie(cmovieRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from childhood_movies WHERE id = $1',
      [id]
    );
    return new ChildhoodMovie(rows[0]);
  }
};
