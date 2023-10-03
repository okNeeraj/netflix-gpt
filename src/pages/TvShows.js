import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import { MOVIES } from "../services/tmdb";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";

const TvShows = () => {
  const { popular } = MOVIES;

  // Fetch movies and set to Redux Store
  useMovie(popular.endpoint, 'tvShowIndia', 10770, 'hi');
  useMovie(popular.endpoint, 'tvShowInternationl', 10770, 'en');

  // Receive moview list from Redux Store
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      <Showcase genreId={10770} originalLanguage='en' resultIndex={10} />
      <div className='moview-by-type px-4 md:px-12 mt-[-80px] z-50 relative'>
        <MovieSlider heading="Tv Show in India" data={movies.tvShowIndia} />
        <MovieSlider heading="International Tv Show" data={movies.tvShowInternationl} />
      </div>
    </div>
  )
}

export default TvShows
