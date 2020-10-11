import React, {Component} from "react";
import PropTypes from "prop-types";
import refs from "../../services/refs";
import styles from "./MovieDetails.module.scss";

interface genreTypes {
  id: number,
  name: string,
}

interface movieTypes {
  id: number
  title: string,
  overview: string,
  poster_path: string,
  vote_average: number,
  release_date: string,
  genres: genreTypes[],
}

interface propTypes {
  movie: movieTypes;
}

class MovieDetails extends Component<propTypes> {
  render() {
    const {title, overview, poster_path: poster, vote_average: score, release_date, genres} = this.props.movie;
    const release = (new Date(release_date)).getFullYear();
    return (
      <section>
        <div className={styles.movieDetails}>
          <div className={styles.poster}>
            <img src={`${refs.IMAGES_URL}${poster}`} alt={title}/>
          </div>
          <div>
            <h2 className={styles.title}>{title} ({release})</h2>
            <p className={styles.rating}>User rating: {score}</p>
            <h3 className={styles.overViewTitle}>Overview</h3>
            <p className={styles.overViewContent}>{overview}</p>
            <div className={styles.genresBlock}>
              <h3 className={styles.genresTitle}>Genres</h3>
              <ul className={styles.genresList}>
                {genres.map(({name, id}) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;