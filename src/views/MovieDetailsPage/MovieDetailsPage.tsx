import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import fetchWithQuery from "../../services/movie-api";
import styles from "./MovieDetailsPage.module.scss";
import routes from "../../routes";

interface propTypes {
  history: any,
  match: any,
  location: any,
}

// interface genreTypes {
//   id: number,
//   name: string,
// }

// interface movieTypes {
//   id: number
//   title: string,
//   overview: string,
//   poster_path: string,
//   vote_average: number,
//   release_date: string,
//   genres: genreTypes[],
// }

interface stateTypes {
  movie: any,
  error: any,
}

class MovieDetailsPage extends Component<propTypes, stateTypes> {
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

  private handleGoBack = (): void => {
    const {location: {state}, history} = this.props;

    if (state && state.from) {
      return history.push(state.from);
    }
    history.push(routes.movies)
  }

  render() {
    const {movie, error} = this.state;
    const {match} = this.props;
    return (
      <div className="container">
        <button className={styles.btnReturn} type="button" onClick={this.handleGoBack}>Return to movies</button>
        {movie && <MovieDetails movie={movie}/>}

        <section className={styles.sectionAdditional}>
          <h2 className={styles.titleAdditional}>Additional information</h2>
          <ul className={styles.listAdditional}>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </section>

        <Route path={`${match.path}/cast`} component={Cast}/>
        <Route path={`${match.path}/reviews`} component={Reviews}/>

        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}
      </div>
    );
  }
}

export default MovieDetailsPage;