import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import { MOVIES, SHOWCASE } from "../services/tmdb";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import useShowCase from "../hooks/useShowCase";

const TvShows = () => {
  const { tvShow } = SHOWCASE;
  const { popular } = MOVIES;

  // Fetch movies and set to Redux Store
  useShowCase(tvShow.endpoint, tvShow.type, 10770, 'en', 1);

  useMovie(popular.endpoint, 'tvShowIndia', 10770, 'hi');
  useMovie(popular.endpoint, 'tvShowInternationl', 10770, 'en');

  // Receive moview list from Redux Store
  const showCase = useSelector((store) => store.showCase.tvShow);
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      {showCase && <Showcase data={showCase} />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        <MovieSlider heading="Tv Show in India" data={movies.tvShowIndia} />
        <MovieSlider heading="International Tv Show" data={movies.tvShowInternationl} />
      </div>
    </div>
  )
}

export default TvShows
