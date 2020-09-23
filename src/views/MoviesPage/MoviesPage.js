import React, {Component} from "react";
import MovieList from "../../components/MovieList/MovieList";
import fetchWithQuery from "../../services/movie-api";
import {NavLink} from "react-router-dom";

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  }

  componentDidMount() {
    fetchWithQuery("search/movie", "tenet")
      .then(({results}) => results)
      .then(movies => this.setState({movies}))
      .catch(error => this.setState({error}));
  }

  render() {
    const {movies, error} = this.state;
    return (
      <section className="container">
        {movies.length > 0 &&
        <MovieList>
          {movies.map(film => (
            <li key={film.id}>
              <NavLink to="">{film.title}</NavLink>
            </li>
          ))}
        </MovieList>}
      </section>
    );
  }
}

export default MoviesPage;