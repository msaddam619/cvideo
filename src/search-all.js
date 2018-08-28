import React, { Component } from "react";
import ShowCard from "./show-card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

class SearchAll extends Component {
  render() {
    return (
      <div className="search">
        <header>
          <h1>
            <Link to="/">cvideo</Link>
          </h1>

          <input
            placeholder="Search Shows"
            onChange={this.props.handleSearchTermchange}
            value={this.props.searchTerm}
          />
        </header>

        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title}${show.description}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard key={show.imdbID} {...show} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleSearchTermchange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAll);
