import React, { Component } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import Header from "./header";

class Details extends Component {
  state = {
    apiData: { rating: "" }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/${this.props.show.imdbID}`)
      .then(response => this.setState({ apiData: response.data }));
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    let ratingcomponent;

    if (this.state.apiData.rating) {
      ratingcomponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingcomponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {ratingcomponent}
          <img src={`/img/posters/${poster}`} alt={`poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}
export default Details;
