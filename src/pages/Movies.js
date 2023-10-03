import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';
import useMovie from '../hooks/useMovie';
import useTrending from '../hooks/useTrending';
import { MOVIES, TRENDINGS } from '../services/tmdb';
import { useSelector } from 'react-redux';


const Movies = () => {
  const { nowPlaying, popular, topRated } = MOVIES;

  // Fetch movies and set to Redux Store
  useMovie(nowPlaying.endpoint, nowPlaying.type);
  useMovie(topRated.endpoint, topRated.type);
  useMovie(popular.endpoint, popular.type);
  useMovie(popular.endpoint, popular.type);

  // By genres
  useMovie(popular.endpoint, 'bollywood', null, 'hi');
  useMovie(popular.endpoint, 'hollywood', null, 'en');
  useMovie(popular.endpoint, 'thriller', 53);
  useMovie(popular.endpoint, 'romance', 10749);
  useMovie(popular.endpoint, 'horror', 27);
  useMovie(popular.endpoint, 'comedy', 35, 'hi');
  useMovie(popular.endpoint, 'adventure', 12);
  useMovie(popular.endpoint, 'animation', 16);

  // Receive moview list from Redux Store
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      <Showcase genreId={null} originalLanguage='hi' resultIndex={1} />
      <div className='moview-by-type px-4 md:px-12 mt-[-80px] z-50 relative'>
        <MovieSlider heading="Bollywood Superstar" data={movies.bollywood} />
        <MovieSlider heading="Hollywood Movies" data={movies.hollywood} />
        <MovieSlider heading="Action Thriller" data={movies.thriller} />
        <MovieSlider heading="Romantic Movies" data={movies.romance} />
        <MovieSlider heading="Scary Movies" data={movies.horror} />
        <MovieSlider heading="Indian Comedy Movies" data={movies.comedy} />
        <MovieSlider heading="Adventurus Movies" data={movies.adventure} />
        <MovieSlider heading="Popular In Animation" data={movies.animation} />
        {/* <MovieSlider heading="Trending Now" data={trendings.trendingAll} />
        <MovieSlider heading="Top Rated Movies" data={movies.topRated} />
        <MovieSlider heading="Popular Movies" data={movies.popular} /> */}
      </div>
    </div>
  )
}

export default Movies
