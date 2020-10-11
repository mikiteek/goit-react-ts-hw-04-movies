import queryString from "query-string";

const getQueryParams = (qs: string) => {
  return queryString.parse(qs);
}

export default getQueryParams;