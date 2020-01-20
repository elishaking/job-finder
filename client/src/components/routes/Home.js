import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    search: '',

    loading: false
  };

  searchJobs = (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { search } = this.state;
    fetch(`/api/v1/jobs/search?term=${search}`)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({ loading: false });

        this.props.history.push('/jobs', {
          jobs: resData.data
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        alert('Something went wrong');
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchJobs} className="search-form">
          <h1>Find a Coding Job</h1>

          <input
            type="text"
            name="search"
            placeholder="e.g. react, MERN, etc"
            onChange={this.onChange} />

          <div className="actions">
            <button type="submit">Search</button>
            <button
              className="outline"
              onClick={() => this.props.history.push('/jobs')}>All Jobs</button>
          </div>
        </form>
      </div>
    )
  }
}
