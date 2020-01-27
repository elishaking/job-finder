const dotenv = require('dotenv');
dotenv.config({ path: './test/config/config.env' });

const server = require('../../server');
const request = require('supertest');

describe('Job Controller Integration Tests', () => {
  it('GET /api/v1/jobs - should get all jobs', (done) => {
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

  it('GET /api/v1/jobs/search - should search for a job', (done) => {
    request(server)
      .get('/api/v1/jobs/search?term=React')
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(typeof res.body === 'object').toBe(true);

        expect(res.body).toHaveProperty('data');
        const { data } = res.body;
        expect(Array.isArray(data)).toBe(true);

        if (data.length > 0)
          expect(data[0].technologies).toMatch(/React/);

        done();
      })
      .catch((err) => done(err));
  });

  it('POST /api/v1/jobs - should create a new job', (done) => {
    const newJob = {
      title: 'Full Stack Engineer',
      technologies: "React, MongoDB",
      budget: 200000,
      description: 'Build great projects',
      contactEmail: 'mail@mail.com'
    };

    request(server)
      .post('/api/v1/jobs')
      .send(newJob)
      .then((res) => {
        expect(res.status).toEqual(201);
        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual('Job Created');
        expect(res.body).toHaveProperty('data');

        const { data } = res.body;
        expect(typeof data === 'object').toBe(true);
        expect(data).toHaveProperty('title');
        expect(data.title).toEqual(newJob.title);
        expect(data).toHaveProperty('technologies');
        expect(data.technologies).toEqual(newJob.technologies);
        expect(data).toHaveProperty('budget');
        expect(data.budget).toEqual(newJob.budget);
        expect(data).toHaveProperty('description');
        expect(data.description).toEqual(newJob.description);
        expect(data).toHaveProperty('contactEmail');
        expect(data.contactEmail).toEqual(newJob.contactEmail);

        done();
      })
      .catch((err) => done(err));
  });
});
