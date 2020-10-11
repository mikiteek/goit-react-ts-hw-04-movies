import refs from "./refs";

const fetchWithQuery = (endpoint: string, query: string = "") => {
  const url = query !== ""
    ? `${refs.BASE_URL}${endpoint}?api_key=${refs.API_KEY}&query=${query}`
    : `${refs.BASE_URL}${endpoint}?api_key=${refs.API_KEY}`;

  return fetch(url)
    .then(res => res.json());
}

export default fetchWithQuery;