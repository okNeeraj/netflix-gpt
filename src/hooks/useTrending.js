import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setTrending } from '../stores/trendingSlice';

const useTrending = (endpoint, trendingType) => {
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const response = await fetch(`${TMDB_API_URL}/trending/${endpoint}?language=en-US`, TMDB_OPTIONS);
      const result = await response.json();
      dispatch(setTrending({ trendingType, trendingData: result }))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}

export default useTrending;
