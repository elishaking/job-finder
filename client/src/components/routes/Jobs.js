import React, { Component } from 'react';
import Spinner from '../Spinner';

export default class Jobs extends Component {
  state = {
    jobs: [],

    loading: true
  };

  componentDidMount() {
    if (this.props.location.state) {
      const { jobs } = this.props.location.state;
      this.setState({ jobs, loading: false });

      return;
    }

    fetch('/api/v1/jobs')
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData)
        if (resData.success) {
          this.setState({
            jobs: resData.data,
            loading: false
          });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });

        alert("Something went wrong, Please try again");
      });
  }

  render() {
    const { jobs, loading } = this.state;

    return (
      <div>
        <h1>Jobs</h1>

        <div className="jobs">
          {
            loading ? (<Spinner />) :
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
