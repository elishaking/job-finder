import React, { Component } from 'react';
import Spinner from '../Spinner';

export default class Home extends Component {
  state = {
    search: '',

    loading: false
  };

  searchJobs = (e) => {
    e.preventDefault();

    const { search, loading } = this.state;

    if (loading || search === '') return;

    this.setState({ loading: true });

    fetch(`/api/v1/jobs/search?term=${search}`)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({ loading: false });

        this.props.history.push('/jobs', {
          term: search,
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
    const { loading } = this.state;

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
            <button disabled={loading} type="submit">Search</button>
            <button
              className="outline"
              onClick={() => this.props.history.push('/jobs')}>All Jobs</button>
          </div>

          {loading && <Spinner />}
        </form>
      </div>
    )
  }
}
