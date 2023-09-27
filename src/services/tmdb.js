export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDEyODgxZTBiNDZiZDI2MTE1ZGUxN2FkYzJjZDEwZCIsInN1YiI6IjY1MGU1NjA2ZTFmYWVkMDEzYTBhMjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gE32tfhvHN7OVE7J3-ZbL8VExxmBUR5m_khhKPMH7ec'
  }
};

export const TMDB_CDN_URL = "https://image.tmdb.org/t/p/"

export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const MOVIES = {
  showCase: {
    endpoint: 'now_playing',
    type: 'showCase',
  },
  videos: {
    endpoint: 'videoId/videos',
    type: 'videos',
  },
  nowPlaying: {
    endpoint: 'now_playing',
    type: 'nowPlaying',
  },
  popular: {
    endpoint: 'popular',
    type: 'popular',
  },
  topRated: {
    endpoint: 'top_rated',
    type: 'topRated',
  },
}

export const TRENDINGS = {
  trendingAll: {
    endpoint: 'all/day',
    type: 'trendingAll',
  },
  trendingMovies: {
    endpoint: 'movie/day',
    type: 'trendingMovies',
  },
  trendingTv: {
    endpoint: 'tv/day',
    type: 'trendingTv',
  },
}
