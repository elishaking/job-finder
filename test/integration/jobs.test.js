const dotenv = require('dotenv');
dotenv.config({ path: './test/config/config.env' });

const server = require('../../server');
const request = require('supertest');

describe('Job Controller Integration Tests', () => {
  it('GET /api/v1/jobs - should get all locations', (done) => {
    request(server)
      .get('/api/v1/jobs')
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(typeof res.body === 'object').toBe(true);

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);

        done();
      })
      .catch((err) => done(err));
  });
});
