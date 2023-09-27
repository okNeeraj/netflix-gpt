import { useSelector } from 'react-redux';
import { MOVIES } from '../services/tmdb';
import useMovie from '../hooks/useMovie';
import VideoBackground from './VideoBackground';

const Showcase = () => {
  const { showCase } = MOVIES;
  useMovie(showCase.endpoint, showCase.type);

  const showCaseList = useSelector((store) => store.movies?.showCase);
  if (showCaseList === null) return;

  const { results } = showCaseList;
  const { id, original_title, overview, backdrop_path, poster_path } = results[2];

  return (
    <div className='showcase h-screen bg-gradient-to-b from-slate-700 mt-[-70px] xl:mt-[-180px]'>
      <div className='h-full'>
        <VideoBackground videoId={id} backdrop={backdrop_path} poster={poster_path} title={original_title} />
        <div className='overlay h-full z-10 relative'>
          <div className='bg-rrr w-full h-full md:w-3/5 flex items-center' style={{ background: 'linear-gradient(77deg,rgba(0,0,0,.8),transparent 85%)' }}>
            <div className='px-4 md:px-12 pt-[70px] lg:pt-4 w-full lg:w-3/4 text-white'>
              <h1 className='text-4xl md:text-6xl mb-2'>{original_title}</h1>
              <p className='text-sm md:text-base'>{overview}</p>
              <div className='action flex gap-3 mt-4'>
                <button className='px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
                  <span className='icon-fill text-[36px]'>play_arrow</span>
                  <span>Play</span>
                </button>
                <button className='px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
                  <span className='icon-line text-[36px]'>info</span>
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
