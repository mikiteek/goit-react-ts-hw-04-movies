import refs from "./refs";
import PropTypes from "prop-types";

const fetchWithQuery = (endpoint, query = "") => {
  const url = query !== ""
    ? `${refs.BASE_URL}${endpoint}?api_key=${refs.API_KEY}&query=${query}`
    : `${refs.BASE_URL}${endpoint}?api_key=${refs.API_KEY}`;

  return fetch(url)
    .then(res => res.json());
}

fetchWithQuery.propTypes = {
  endpoint: PropTypes.string.isRequired,
  query: PropTypes.string,
}

export default fetchWithQuery;