import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import fetchWithQuery from "../../services/movie-api";
import routes from "../../routes";

class HomePage extends Component {
  state = {
    movies: [],
    error: null
  }

  componentDidMount() {
    fetchWithQuery("trending/movie/day")
      .then(({results}) => results)
      .then(movies => this.setState({movies}))
      .catch(error => this.setState({error}));
  }

  render() {
    const {movies, error} = this.state;
    return (
      <section className="container">
        <h2>Trending today</h2>
        {
          movies.length > 0 &&
          <MovieList>
            {movies.map(film => (
              <li key={film.id}>
                <NavLink
                  to={{
                    pathname: `${routes.movies}/${film.id}`,
                    state: { from: this.props.location }
                  }}
                >
                  {film.title}
                </NavLink>
              </li>
            ))}
          </MovieList>
        }
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}

      </section>
    );
  }
}

export default HomePage;