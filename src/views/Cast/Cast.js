import React, {Component} from "react";
import refs from "../../services/refs";
import fetchWithQuery from "../../services/movie-api";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  }

  componentDidMount() {
    const endpoint = (`movie/${this.props.match.params.movieId}/credits`);
    fetchWithQuery(endpoint)
      .then(({cast}) => this.setState({cast}))
      .catch(error => this.setState({error}));
  }

  render() {
    const {cast, error} = this.state;
    console.log(cast)

    return (
      <>
        <ul className={styles["castList"]}>
          {cast.map(({id, name, profile_path: photo}) => (
            <li key={id}>
              <img src={`${refs.IMAGES_URL}${photo}`} width={100}/>
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}}
      </>

    );
  }
}

export default Cast;