import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  gotoSearch = event => {
    event.preventDefault();

    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="app">
        <div className="landing">
          <h1>cvideo</h1>
          <form onSubmit={this.gotoSearch}>
            <input placeholder="search -- hit Enter " />
          </form>
          <Link to="/search">or browse all </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
