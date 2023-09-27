import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';
import useMovie from '../hooks/useMovie';
import { MOVIES } from '../services/tmdb';
import { useSelector } from 'react-redux';

const Browse = () => {
  const { nowPlaying, popular, topRated } = MOVIES;

  // Fetch movies and set to Redux Store
  useMovie(nowPlaying.endpoint, nowPlaying.type);
  useMovie(topRated.endpoint, topRated.type);
  useMovie(popular.endpoint, popular.type);

  // Receive moview list from Redux Store
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      <Showcase />
      <div className='moview-by-type px-4 md:px-12 mt-[-80px] z-50 relative'>
        <MovieSlider heading="Now Playing" data={movies.nowPlaying} />
        <MovieSlider heading="Top Rated" data={movies.topRated} />
        <MovieSlider heading="Popular" data={movies.popular} />
      </div>
    </div>
  )
}

export default Browse;
