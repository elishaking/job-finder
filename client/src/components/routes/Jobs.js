import React, { Component } from 'react';
import Spinner from '../Spinner';

const JOB_CATEGORY = {
  SAVED: 'saved',
  ONLINE: 'online'
};

export default class Jobs extends Component {
  state = {
    jobs: [],

    loading: true
  };

  category = JOB_CATEGORY.SAVED;

  componentDidMount() {
    if (this.props.location.state) {
      const { jobs } = this.props.location.state;
      this.setState({ jobs, loading: false });

      return;
    }

    this.fetchJobs();
  }

  fetchJobs = () => {
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

  onChange = (e) => {
    const category = e.target.value;

    if (this.category === category)
      return;

    if (category === JOB_CATEGORY.SAVED) {
      this.setState({ loading: true });

      this.fetchJobs();
    } else {
      this.setState({ loading: true });

      fetch('https://jobs.github.com/positions.json?search=node&page', {
        mode: 'no-cors',

      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => console.log(err));

      // axios.get('https://jobs.github.com/positions.json?search=node', {
      //   headers: {

      //   }
      // })
      //   .then((res) => console.log(res.data));
    }
  };

  render() {
    const { jobs, loading } = this.state;

    return (
      <div>
        <div className="heading">
          <h1>Jobs</h1>

          <select name="category" onChange={this.onChange}>
            <option value="saved">Saved Jobs</option>
            <option value="online">Online Jobs</option>
          </select>
        </div>

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
