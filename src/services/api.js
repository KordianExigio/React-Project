const API_KEY = "c2c6005c0115632673b092071e481aea";
const BASE_URL = "https://api.themoviedb.org/3"; // pamiętaj o /3

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pl-PL`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pl-PL`
  );
  const data = await response.json();
  return data.results;
};
