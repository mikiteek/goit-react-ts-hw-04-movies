import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/Searchbar/Searchbar";
import fetchWithQuery from "../../services/movie-api";
import getQueryParams from "../../utils/getQueryParams";

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  }

  componentDidMount() {
    const {query} = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {query: prevQuery} = getQueryParams(prevProps.location.search);
    const {query: nextQuery} = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    fetchWithQuery("search/movie", query)
      .then(({results}) => results)
      .then(movies => this.setState({movies}))
      .catch(error => this.setState({error}));
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    })
  }

  render() {
    const {movies, error} = this.state;
    const match = this.props.match;
    return (
      <section className="container">
        <Searchbar onSubmit={this.handleChangeQuery}/>
        {movies.length > 0 &&
        <MovieList>
          {movies.map(film => (
            <li key={film.id}>
              <NavLink
                to={{
                  pathname: `${match.url}/${film.id}`,
                  state: { from: this.props.location }
                }}
              >
                {film.title}
              </NavLink>
            </li>
          ))}
        </MovieList>}
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}
      </section>
    );
  }
}

export default MoviesPage;