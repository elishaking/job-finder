if (process.env.NODE_ENV !== 'CI') {
  const dotenv = require('dotenv');
  dotenv.config({ path: './test/config/config.env' });
}
const { createJob, findJobs } = require('../../../src/services/jobs');

describe('Job Service Unit tests', () => {

  it('findJobs() - should find all jobs in the database', (done) => {
    findJobs()
      .then(({ data }) => {
        expect(Array.isArray(data)).toBe(true);

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('createJob() - should create a job in the database', (done) => {
    const job = {
      title: 'Full Stack Engineer',
      technologies: "React, MongoDB",
      budget: 200000,
      description: 'Build great projects',
      contactEmail: 'mail@mail.com'
    };

    createJob(job)
      .then(({ data }) => {
        expect(typeof data === 'object').toBe(true);
        expect(data).toHaveProperty('title');
        expect(data.title).toEqual(job.title);
        expect(data).toHaveProperty('technologies');
        expect(data.technologies).toEqual(job.technologies);
        expect(data).toHaveProperty('budget');
        expect(data.budget).toEqual(job.budget);
        expect(data).toHaveProperty('description');
        expect(data.description).toEqual(job.description);
        expect(data).toHaveProperty('contactEmail');
        expect(data.contactEmail).toEqual(job.contactEmail);

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

