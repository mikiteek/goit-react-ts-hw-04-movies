import React, {Component} from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import fetchWithQuery from "../../services/movie-api";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: null,
  }


  componentDidMount() {
    const endpoint = (`movie/${this.props.match.params.movieId}`);
    fetchWithQuery(endpoint)
      .then(movie => this.setState({movie}))
      .catch(error => this.setState({error}));
  }

  render() {
    const {movie, error} = this.state;
    return (
      <div className="container">
        {movie && <MovieDetails movie={movie}/>}
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}
      </div>
    );
  }
}

export default MovieDetailsPage;