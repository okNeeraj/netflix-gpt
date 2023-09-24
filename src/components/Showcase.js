import { useSelector } from 'react-redux';
import { MOVIE_TYPE } from '../services/tmdb';
import useMovie from '../hooks/useMovie';
import VideoBackground from './VideoBackground';

const Showcase = () => {
  const { nowPlaying } = MOVIE_TYPE;
  useMovie(nowPlaying.endpoint, nowPlaying.movieType);

  const nowPlayingList = useSelector((store) => store.movies?.nowPlaying);
  if (nowPlayingList === null) return;

  const { results } = nowPlayingList;
  const { id, title, overview, adult } = results[0];

  return (
    <div className='showcase h-screen bg-gradient-to-b from-cyan-700 -mt-[70px]'>
      <div className='h-full'>
        <VideoBackground videoId={id} />
        <div className='overlay h-full z-10 relative'>
          <div className='bg-rrr w-full h-full md:w-3/5 flex items-center' style={{ background: 'linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)' }}>
            <div className='px-4 md:px-12 pt-[70px] w-full md:w-3/4 text-white'>
              <h1 className='text-4xl mb-2'>{title}</h1>
              <p>{overview}</p>
              <div className='action flex gap-3 mt-4'>
                <button className='px-6 py-[10px] bg-white text-black rounded-[4px] flex gap-2'>
                  <span>▶️</span>
                  <span>Play</span>
                </button>
                <button className='px-6 py-[10px] bg-[#6d6d6eb3] rounded-[4px] flex gap-2'>
                  <span>ℹ</span>
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
