import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import { MOVIES } from "../services/tmdb";
import MovieCard from "./MovieCard"

const MovieSlider = () => {
  const { nowPlaying } = MOVIES;

  // Fetch movies and set to Redux Store
  useMovie(nowPlaying.endpoint, nowPlaying.type);

  // Receive moview list from Redux Store
  const getNowPlaying = useSelector((store) => store.movies.nowPlaying);
  if (getNowPlaying === null) return <h1>Not found</h1>;
  const nowPlayingMovies = getNowPlaying.results;
  console.log(nowPlayingMovies)

  return (
    <div className="flex gap-4 overflow-auto">
      {
        nowPlayingMovies.map((movie) => <MovieCard key={movie.id} data={movie} />)
      }
    </div>
  )
}

export default MovieSlider
