import React, {Component} from "react";
import refs from "../../services/refs";
import fetchWithQuery from "../../services/movie-api";
import styles from "./Cast.module.scss";

interface propTypes {
  history: any,
  match: any,
  location: any,
}

interface castTypes {
  id: string,
  name: string,
  profile_path: string,
}

interface stateTypes {
  cast: castTypes[],
  error: any,
}

class Cast extends Component<propTypes, stateTypes> {
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
    return (
      <>
        <ul className={styles.castList}>
          {cast.map(({id, name, profile_path: photo}) => (
            <li key={id}>
              <img src={photo?`${refs.IMAGES_URL}${photo}`: `${refs.IMAGES_CAP}`} height={150} width={100} alt={name}/>
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}
      </>

    );
  }
}

export default Cast;