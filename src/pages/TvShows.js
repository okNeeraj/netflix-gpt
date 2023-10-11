import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import { MOVIES, SHOWCASE } from "../services/tmdb";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import useShowCase from "../hooks/useShowCase";
import ShowcaseShimmer from "../components/ShowcaseShimmer";
import MovieSliderShimmer from "../components/MovieSliderShimmer";

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
  if (!movies && !showCase) return;

  return (
    <div className='broswe-page'>
      {showCase ? <Showcase data={showCase} /> : <ShowcaseShimmer />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        {
          movies.tvShowIndia ? (
            <MovieSlider heading="Tv Show in India" data={movies.tvShowIndia} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }

        {
          movies.tvShowInternationl ? (
            <MovieSlider heading="International Tv Show" data={movies.tvShowInternationl} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }
      </div>
    </div>
  )
}

export default TvShows
