import React, {Component} from "react";
import fetchWithQuery from "../../services/movie-api";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: null,
  }


  componentDidMount() {
    const endpoint = this.props.match.url;
    fetchWithQuery(endpoint)
      .then(movie => this.setState({movie}))
      .catch(error => this.setState({error}));
  }
  render() {
    return(
      <h2></h2>
    )
  }
}

export default MovieDetailsPage;