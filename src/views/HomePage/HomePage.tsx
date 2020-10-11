import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import fetchWithQuery from "../../services/movie-api";
import styles from "./HomePage.module.scss";
import routes from "../../routes";

interface propTypes {
  history: any,
  match: any,
  location: any,
}

interface movieTypes {
  id: string,
  title: string,
}

interface stateTypes {
  movies: movieTypes[],
  error: any,
}

class HomePage extends Component<propTypes, stateTypes> {
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
        <h2 className={styles.trendingHeader}>Trending today</h2>
        {
          movies.length > 0 &&
          <MovieList>
            {movies.map((film: movieTypes) => (
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