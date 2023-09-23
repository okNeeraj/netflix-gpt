import { useSelector } from 'react-redux';
import useMovie from '../hooks/useMovie'
import { MOVIE_TYPE } from '../services/tmdb';

const Browse = () => {
  const { nowPlaying } = MOVIE_TYPE;

  // Fetch moviews and set to Redux Store
  useMovie(nowPlaying.endpoint, nowPlaying.movieType);

  // Receive moview list from Redux Store
  const nowPlayingList = useSelector((store) => store.movies.nowPlaying);
  if (nowPlayingList === null) return <h1>Not found</h1>;

  const { results } = nowPlayingList;

  console.log(results)

  return (
    <div className=''>
      <h1>Browse Page</h1>
    </div>
  )
}

export default Browse;
