import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setMovie } from '../stores/moviesSlice';

const useMovie = (endpoint, movieType, genreId, originalLanguage) => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies[movieType]);
  const fetchData = async () => {
    try {
      let apiUrl = `${TMDB_API_URL}/movie/${endpoint}?language=en-US&page=1`;

      if (genreId) {
        apiUrl += `&with_genres=${genreId}`;
      }

      if (originalLanguage) {
        apiUrl += `&with_original_language=${originalLanguage}`;
      }

      const response = await fetch(apiUrl, TMDB_OPTIONS);
      const result = await response.json();
      dispatch(setMovie({ movieType, movieData: result }))
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    if (!movieData || movieType === 'showCase' || movieType === 'videos') {
      fetchData()
    }
  }, [dispatch, movieData])
}

export default useMovie;
