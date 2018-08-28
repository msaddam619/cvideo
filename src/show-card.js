import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-redius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

class ShowCard extends Component {
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} show poster `}
          src={`/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>{this.props.year} </h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
