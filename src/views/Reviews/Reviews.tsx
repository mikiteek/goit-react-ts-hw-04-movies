import React, {Component} from "react";
import fetchWithQuery from "../../services/movie-api";

interface propTypes {
  history: any,
  match: any,
  location: any,
}

interface reviewer {
  id: string,
  author: string,
  content: string,
}

interface stateTypes {
  reviews: reviewer[],
  error: any,
}

class Reviews extends Component<propTypes, stateTypes> {
  state = {
    reviews: [],
    error: null,
  }

  componentDidMount() {
    const endpoint = (`movie/${this.props.match.params.movieId}/reviews`);
    fetchWithQuery(endpoint)
      .then(({results}) => this.setState({reviews: results}))
      .catch(error => this.setState({error}));
  }

  render() {
    const {reviews, error} = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 && reviews.map(({id, author, content}) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
          {reviews.length === 0 && <h2>No reviews</h2>}
        </ul>
        {error && <h2>For technical reasons the information is temporarily unavailable, please try again later</h2>}
      </>
    );
  }
}

export default Reviews;