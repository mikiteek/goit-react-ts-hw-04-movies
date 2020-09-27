import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./MovieList.module.scss";

class MovieList extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <ul className={styles.movieList}>
        {this.props.children}
      </ul>
    );
  }
}

export default MovieList;