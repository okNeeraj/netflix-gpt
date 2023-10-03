import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import { MOVIES } from "../services/tmdb";

const Latest = () => {
  const { popular } = MOVIES;

  // Fetch movies and set to Redux Store
  useMovie(popular.endpoint, 'latest', null, 'hi');

  // Receive moview list from Redux Store
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      <Showcase genreId={null} originalLanguage='hi' resultIndex={0} />
      <div className='moview-by-type px-4 md:px-12 mt-[-80px] z-50 relative'>
        <MovieSlider heading="Latest Release" data={movies.latest} />
      </div>
    </div>
  )
}

export default Latest
