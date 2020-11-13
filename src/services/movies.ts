export interface MovieResponse {
  Search: Movie[];
  Error: string;
  Response: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Year: string;
}

const API_KEY = 'd9bf4922';

export const getMovies = async (searchTerm: string) => {
  const searchURL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;

  const res = await fetch(searchURL);
  const json: MovieResponse = await res.json();

  if (res.ok && !json.Error) {
    return json.Search;
  } else {
    throw new Error(json.Error);
  }
};
