import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setGptSearch } from '../stores/searchSlice';

const useSearch = (endpoint, query, actionType) => {
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const response = await fetch(`${TMDB_API_URL}/search/${endpoint}?query=${query}&language=en-US&page=1`, TMDB_OPTIONS);
      const results = await response.json();
      console.log(results);
      dispatch(setGptSearch({ actionType, searchResults: results }))
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}

export default useSearch;
