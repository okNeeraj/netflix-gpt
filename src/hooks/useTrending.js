import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setTrending } from '../stores/trendingSlice';

const useTrending = (endpoint, trendingType, genreId, originalLanguage) => {
  const dispatch = useDispatch();
  const trendingData = useSelector((store) => store.trendings[trendingType]);
  const fetchData = async () => {
    try {
      let apiUrl = `${TMDB_API_URL}/trending/${endpoint}?language=en-US`;

      if (genreId) {
        apiUrl += `&with_genres=${genreId}`;
      }

      if (originalLanguage) {
        apiUrl += `&with_original_language=${originalLanguage}`;
      }
      const response = await fetch(apiUrl, TMDB_OPTIONS);
      const result = await response.json();
      dispatch(setTrending({ trendingType, trendingData: result }))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    !trendingData && fetchData()
  }, [dispatch, trendingData])
}

export default useTrending;
