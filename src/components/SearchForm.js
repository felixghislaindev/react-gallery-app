// this is a controlled form compponent , it has his own state which will be use
// to store the input value from the form which will then be passed and use
// in the parent component app.js and used for serch functionality

import React, { Component } from "react";
// redirecting after submition
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  state = {
    value: ""
  };

  // handle form vlue and set state value
  handleFormValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  // handle from submtion and passng form value to parent componenet for search
  handleSubmition = e => {
    // stop form from reloding
    e.preventDefault();
    this.props.search(this.state.value);
    this.setState({
      value: ""
    });
    this.props.history.push("/search");
  };
  render() {
    return (
      <React.Fragment>
        <h2 className="app-title">React Gallery App</h2>
        <form className="search-form" onSubmit={this.handleSubmition}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            required
            value={this.state.value}
            onChange={this.handleFormValue}
          />
          <button type="submit" className="search-button">
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchForm);
