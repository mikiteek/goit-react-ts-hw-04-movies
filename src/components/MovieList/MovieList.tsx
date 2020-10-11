import React, {Component} from "react";
import styles from "./MovieList.module.scss";

interface propTypes {
  children: any,
}

class MovieList extends Component<propTypes> {
  render() {
    return (
      <ul className={styles.movieList}>
        {this.props.children}
      </ul>
    );
  }
}

export default MovieList;