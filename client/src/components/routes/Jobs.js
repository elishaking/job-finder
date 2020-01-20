import React, { Component } from 'react';

export default class Jobs extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    if (this.props.location.state) {
      const { jobs } = this.props.location.state;
      this.setState({ jobs });

      return;
    }

    fetch('/api/v1/jobs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ jobs: data.jobs });
        }
      });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        <h1>Jobs</h1>

        <div className="jobs">
          {
            jobs.map((job, index) => (
              <div key={index} className="job">
                <h2>{job.title}</h2>
                <small>${job.budget} &middot; {job.technologies}</small>
                <p>{job.description}</p>
                <small>{job.contactEmail}</small>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
