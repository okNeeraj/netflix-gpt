import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';
import TrendingSlider from '../components/TrendingSlider';
import useMovie from '../hooks/useMovie';
import useTrending from '../hooks/useTrending';
import { MOVIES, TRENDINGS } from '../services/tmdb';
import { useSelector } from 'react-redux';

const Browse = () => {
  const { trendingAll, trendingTv, trendingMovies } = TRENDINGS;
  const { nowPlaying, popular, topRated } = MOVIES;

  // Fetch movies and set to Redux Store
  useTrending(trendingAll.endpoint, trendingAll.type);
  useTrending(trendingTv.endpoint, trendingTv.type);
  useTrending(trendingMovies.endpoint, trendingMovies.type);

  useMovie(nowPlaying.endpoint, nowPlaying.type);
  useMovie(topRated.endpoint, topRated.type);
  useMovie(popular.endpoint, popular.type);
  useMovie(popular.endpoint, popular.type);

  // Receive moview list from Redux Store
  const trendings = useSelector((store) => store.trendings);
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      <Showcase />
      <div className='moview-by-type px-4 md:px-12 mt-[-80px] z-50 relative'>
        <MovieSlider heading="Now Playing" data={movies.nowPlaying} />
        <MovieSlider heading="Trending Now" data={trendings.trendingAll} />
        <TrendingSlider heading="Top 10 Movies in India" data={trendings.trendingMovies} />
        <MovieSlider heading="Top Rated Movies" data={movies.topRated} />
        <TrendingSlider heading="Top 10 TV Shows in India" data={trendings.trendingTv} />
        <MovieSlider heading="Popular Movies" data={movies.popular} />
      </div>
    </div>
  )
}

export default Browse;
