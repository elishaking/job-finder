if (process.env.NODE_ENV !== 'CI') {
  const dotenv = require('dotenv');
  dotenv.config({ path: './test/config/config.env' });
}
const { findJobs } = require('../../../src/services/jobs');

describe('Job Service Unit tests', () => {

  it('findJobs() - should find all jobs in the database', (done) => {
    findJobs()
      .then(({ data }) => {
        console.log(data);
        expect(Array.isArray(data)).toBe(true);

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

