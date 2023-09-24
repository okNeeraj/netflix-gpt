import { useSelector } from 'react-redux';
import useMovie from '../hooks/useMovie'
import { MOVIE_TYPE } from '../services/tmdb';
import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';

const Browse = () => {
  const { nowPlaying } = MOVIE_TYPE;

  // Fetch movies and set to Redux Store
  // useMovie(nowPlaying.endpoint, nowPlaying.movieType);

  // Receive moview list from Redux Store
  const nowPlayingList = useSelector((store) => store.movies.nowPlaying);
  // if (nowPlayingList === null) return <h1>Not found</h1>;

  return (
    <div className='broswe-page'>
      <Showcase />
      <div className='moview-by-type'>
        <MovieSlider />
      </div>
    </div>
  )
}

export default Browse;
