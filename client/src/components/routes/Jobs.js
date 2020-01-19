import React, { Component } from 'react';

export default class Jobs extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    fetch('/api/v1/jobs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
      </div>
    )
  }
}
