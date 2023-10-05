import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';
import TrendingSlider from '../components/TrendingSlider';
import useMovie from '../hooks/useMovie';
import useTrending from '../hooks/useTrending';
import { SHOWCASE, TRENDINGS, MOVIES } from '../services/tmdb';
import { useSelector } from 'react-redux';
import useShowCase from '../hooks/useShowCase';

const Browse = () => {
  const { landingPage, tvShow, movie, latest } = SHOWCASE;
  const { trendingAll, trendingTv, trendingMovies } = TRENDINGS;
  const { nowPlaying, popular, topRated } = MOVIES;

  /**
   * Fetch data using below custom hooks, and set to Redux Store
   * @useShowCase 
   * @useTrending 
   * @useMovies 
   */

  useShowCase(landingPage.endpoint, landingPage.type, null, 'en', 19);

  useTrending(trendingAll.endpoint, trendingAll.type);
  useTrending(trendingTv.endpoint, trendingTv.type);
  useTrending(trendingMovies.endpoint, trendingMovies.type);

  useMovie(nowPlaying.endpoint, nowPlaying.type);
  useMovie(topRated.endpoint, topRated.type);
  useMovie(popular.endpoint, popular.type);
  useMovie(popular.endpoint, popular.type);
  useMovie(popular.endpoint, 'bollywood', null, 'hi');

  /**
   * Receive data from Redux Store
   * @useShowCase
   * @useTrending 
   * @useMovies 
   */

  const showCase = useSelector((store) => store.showCase.landingPage);
  const trendings = useSelector((store) => store.trendings);
  const movies = useSelector((store) => store.movies);

  if (!movies && !showCase) return;

  return (
    <div className='broswe-page'>
      {showCase && <Showcase data={showCase} />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        {movies.nowPlaying && <MovieSlider heading="Now Playing" data={movies.nowPlaying} />}
        {trendings.popular && <MovieSlider heading="Trending Now" data={trendings.popular} />}
        {trendings.trendingMovies && <TrendingSlider heading="Top 10 Trending Movies" data={trendings.trendingMovies} />}
        {movies.bollywood && <MovieSlider heading="Now Playing Bollywood Movies" data={movies.bollywood} />}
        {movies.topRated && <MovieSlider heading="Top Rated Movies" data={movies.topRated} />}
        {trendings.trendingTv && <TrendingSlider heading="Top 10 TV Shows in India" data={trendings.trendingTv} />}
        {movies.popular && <MovieSlider heading="Popular Movies" data={movies.popular} />}
      </div>
    </div>
  )
}

export default Browse;
