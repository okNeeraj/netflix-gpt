import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setMovie } from '../stores/moviesSlice';

const useMovie = (endpoint, movieType) => {
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const response = await fetch(`${TMDB_API_URL}/movie/${endpoint}/?language=en-US&page=1`, TMDB_OPTIONS);
      const result = await response.json();
      dispatch(setMovie({ movieType, movieData: result }))
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}

export default useMovie;
