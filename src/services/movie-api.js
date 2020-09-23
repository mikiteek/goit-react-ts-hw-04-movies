const fetchWithQuery = (endpoint, query = "") => {
  const url = query !== ""
    ? `https://api.themoviedb.org/3/${endpoint}?api_key=0582d3f510963f6ac84a3c592afe6834&query=${query}`
    : `https://api.themoviedb.org/3/${endpoint}?api_key=0582d3f510963f6ac84a3c592afe6834`;

  return fetch(url)
    .then(res => res.json());
}

export default fetchWithQuery;