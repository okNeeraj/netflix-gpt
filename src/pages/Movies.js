import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';
import useMovie from '../hooks/useMovie';
import { SHOWCASE, MOVIES } from '../services/tmdb';
import { useSelector } from 'react-redux';
import useShowCase from '../hooks/useShowCase';
import ShowcaseShimmer from '../components/ShowcaseShimmer';
import MovieSliderShimmer from '../components/MovieSliderShimmer';


const Movies = () => {
  const { movie } = SHOWCASE;
  const { nowPlaying, popular, topRated } = MOVIES;

  // Fetch movies and set to Redux Store
  useShowCase(movie.endpoint, movie.type, null, 'hi', 4);

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

  // Receive data list from Redux Store
  const showCase = useSelector((store) => store.showCase.movie);
  const movies = useSelector((store) => store.movies);
  if (!movies && !showCase) return;

  return (
    <div className='broswe-page'>
      {showCase ? <Showcase data={showCase} /> : <ShowcaseShimmer />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        {
          movies.bollywood ? (
            <MovieSlider heading="Bollywood Superstar" data={movies.bollywood} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.hollywood ? (
            <MovieSlider heading="Hollywood Movies" data={movies.hollywood} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.thriller ? (
            <MovieSlider heading="Action Thriller" data={movies.thriller} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.romance ? (
            <MovieSlider heading="Romantic Movies" data={movies.romance} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.horror ? (
            <MovieSlider heading="Scary Movies" data={movies.horror} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.comedy ? (
            <MovieSlider heading="Indian Comedy Movies" data={movies.comedy} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.adventure ? (
            <MovieSlider heading="Adventurus Movies" data={movies.adventure} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.animation ? (
            <MovieSlider heading="Popular In Animation" data={movies.animation} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }
      </div>
    </div>
  )
}

export default Movies
