import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import { MOVIES, SHOWCASE } from "../services/tmdb";
import useShowCase from "../hooks/useShowCase";
import ShowcaseShimmer from "../components/ShowcaseShimmer";
import MovieSliderShimmer from "../components/MovieSliderShimmer";

const Latest = () => {
  const { latest } = SHOWCASE;
  const { popular } = MOVIES;

  // Fetch movies and set to Redux Store
  useShowCase(latest.endpoint, latest.type, null, 'hi', 4);

  useMovie(popular.endpoint, 'latest', null, 'hi');

  // Receive moview list from Redux Store
  const showCase = useSelector((store) => store.showCase.latest);
  const movies = useSelector((store) => store.movies);
  if (!movies && !showCase) return;

  return (
    <div className='broswe-page'>
      {showCase ? <Showcase data={showCase} /> : <ShowcaseShimmer />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        {
          movies.latest ? (
            <MovieSlider heading="Latest Release" data={movies.latest} />
          ) : (
            <MovieSliderShimmer dimention={'w-28 md:w-36'} />
          )
        }
      </div>
    </div>
  )
}

export default Latest
