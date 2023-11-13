import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setMovie } from '../stores/moviesSlice';

/**
 * Custom hook to fetch movie data and update the Redux store.
 *
 * This hook fetches movie data using the provided endpoint, genre ID, and original language,
 * and updates the Redux store using the setMovie action.
 *
 * @param {string} endpoint - The endpoint to fetch data from.
 * @param {string} movieState - The movie state to update in the Redux store (e.g., showCase, videos).
 * @param {number} genreId - Optional. The genre ID for filtering movies.
 * @param {string} originalLanguage - Optional. The original language for filtering movies.
 * @returns {void}
 * @example
 * const endpoint = 'popular'; // Endpoint for popular movies
 * const movieState = 'showCase'; // Movie state: showCase, videos, etc.
 * const genreId = 28; // Genre ID for Action (optional)
 * const originalLanguage = 'en'; // Original language (optional)
 * useMovie(endpoint, movieState, genreId, originalLanguage);
 */

const useMovie = (endpoint, movieState, genreId, originalLanguage) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      let apiUrl = `${TMDB_API_URL}/discover/movie?language=en-US&page=1&adult=true`;

      if (genreId) {
        apiUrl += `&with_genres=${genreId}`;
      }

      if (originalLanguage) {
        apiUrl += `&with_original_language=${originalLanguage}`;
      }

      const response = await fetch(apiUrl, TMDB_OPTIONS);
      const result = await response.json();
      dispatch(setMovie({ movieState, movieData: result }))
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}

export default useMovie;
