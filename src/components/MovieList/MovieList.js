import React, {Component} from "react";
import styles from "./MovieList.module.scss";

class MovieList extends Component {
  render() {
    return (
      <ul className={styles.movieList}>
        {this.props.children}
      </ul>
    );
  }
}

export default MovieList;