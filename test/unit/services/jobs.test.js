const { findJobs } = require('../../../src/services/jobs');
const db = require('../../config/db');
const Job = require('../../../src/models/Job');

describe('Job Service Unit tests', () => {
  beforeAll((done) => {
    db.connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  afterAll((done) => {
    db.close()
      .then(() => done())
      .catch((err) => done(err));
  });

  const job = {
    title: 'React',
    technologies: "React, MongoDB",
    budget: 200000,
    description: 'Build great projects',
    contactEmail: 'mail@mail.com'
  };

  // @ts-ignore
  // const jobModel = Job.build(job);

  // it('findJobs() - should find all jobs in the database', (done) => {
  //   jobModel.save()
  //     .then(() => findJobs())
  //     .then(({ data }) => {
  //       expect(Array.isArray(data)).toBe(true);

  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
});

