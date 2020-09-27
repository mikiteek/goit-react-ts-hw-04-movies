import queryString from "query-string";
import PropTypes from "prop-types";

const getQueryParams = (qs) => {
  return queryString.parse(qs);
}

getQueryParams.propTypes = {
  qs: PropTypes.string,
}

export default getQueryParams;