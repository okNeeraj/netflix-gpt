import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { setPlayer } from '../stores/playerSlice';

const usePlayer = (endpoint, playerState, contentId) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      // Fetch data for {videoState}
      const response = await fetch(`${TMDB_API_URL}/${endpoint}/${contentId}?language=en-US`, TMDB_OPTIONS);
      const media = await response.json();
      if (!media) return null;

      const { success, status_message } = await media;

      if (success === false) return status_message;

      // Fetch videos for media.id
      const videoResponse = await fetch(`${TMDB_API_URL}/movie/${media.id}/videos?language=en-US&page=1`, TMDB_OPTIONS);
      const videoResult = await videoResponse.json();

      const mediaResult = {
        info: media,
        videos: videoResult
      }
      dispatch(setPlayer({ playerState, playerData: mediaResult }))
      return mediaResult;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
}

export default usePlayer;
