export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDEyODgxZTBiNDZiZDI2MTE1ZGUxN2FkYzJjZDEwZCIsInN1YiI6IjY1MGU1NjA2ZTFmYWVkMDEzYTBhMjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gE32tfhvHN7OVE7J3-ZbL8VExxmBUR5m_khhKPMH7ec'
  }
};

export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const MOVIE_TYPE = {
  nowPlaying: {
    endpoint: 'now_playing',
    movieType: 'nowPlaying',
  },
  popular: {
    endpoint: 'popular',
    movieType: 'popular',
  },
  topRated: {
    endpoint: 'top_rated',
    movieType: 'topRated',
  },
}
