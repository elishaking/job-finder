import React, { Component } from 'react';

export default class AddJob extends Component {
  state = {
    title: '',
    technologies: '',
    budget: '',
    description: '',
    contactEmail: ''
  };

  addJob = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Add Job</h1>

        <form onSubmit={this.addJob}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Full Stack Engineer"
            onChange={this.onChange}
          />

          <label htmlFor="title">Technologies</label>
          <input
            type="text"
            name="technologies"
            placeholder="e.g. PERN, Angular, MERN, Vue"
            onChange={this.onChange}
          />

          <label htmlFor="title">Budget</label>
          <input
            type="number"
            name="budget"
            placeholder="e.g. 500000"
            onChange={this.onChange}
          />

          <label htmlFor="title">Description</label>
          <input
            type="text"
            name="description"
            placeholder="What is this job about?"
            onChange={this.onChange}
          />

          <label htmlFor="title">Contact Email</label>
          <input
            type="text"
            name="contactEmail"
            placeholder="Your email"
            onChange={this.onChange}
          />

          <button type="submit">Add Job</button>
        </form>
      </div>
    );
  }
}
