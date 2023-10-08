import VideoBackground from './VideoBackground';
import { TMDB_CDN_URL } from "../services/tmdb";
import { PAGE } from '../router/routes';
import { Link } from 'react-router-dom';

const Showcase = ({ data }) => {
  if (!data) return <div className='mt-24'></div>;
  const { id, title, overview, backdrop_path, poster_path } = data?.info;
  const { results } = data?.videos

  const contentId = id;

  return (
    <div className={`showcase md:h-screen mt-[-70px] xl:h-auto xl:aspect-video bg-gradient-to-b from-slate-700 xl:mt-[-180pxL]`}>
      <div className='w-full h-full w-96F h-96F relative'>
        <VideoBackground videos={results} backdrop={backdrop_path} poster={poster_path} title={title} />
        <div className='overlay h-full w-full z-10 relative'>
          {/* For Tablet and Desktop */}
          <div className='hidden md:flex bg-rrr w-full h-full items-center' style={{ background: 'linear-gradient(77deg,rgba(0,0,0,.8),transparent 85%)' }}>
            <div className='px-4 md:px-12 w-full xl:w-3/4 text-white pt-[70px]'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl mb-2 line-clamp-2 font-bold'>{title}</h1>
              <p className='text-sm md:text-base line-clamp-4'>{overview}</p>
              <div className='action flex gap-3 mt-4'>
                <Link to={`${PAGE.WATCH}/${contentId}`} target="_blank" className='px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
                  <span className='icon-fill text-[36px]'>play_arrow</span>
                  <span>Play</span>
                </Link>
                <button className='px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
                  <span className='icon-line text-[36px]'>info</span>
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>

          {/* For Mobile Onlye */}
          <div className='md:hidden bg-rrr pb-8 md:pb-0 backdrop-blur-xl md:backdrop-blur-0 w-full h-full flex items-centerF' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.01),#141414 98%)' }}>
            <div className='px-4 md:px-12 w-full text-white'>
              <div className='relative h-[415px] max-w-80 m-auto  mt-[140px] rounded-lg overflow-hidden shadow-md'>
                <div className='mobile-cover w-full h-full mt-[-5%]'>
                  <img src={`${TMDB_CDN_URL}/w500${poster_path}`} className='object-cover w-full h-full' alt={title} />
                </div>
                <div className='absolute bottom-0 w-full px-4 pt-20 pb-5 text-center' style={{ backgroundImage: `linear-gradient(0deg, rgb(20, 20, 20) 10%, transparent)` }}>
                  <h1 className='text-2xl font-bold md:text-5xl lg:text-6xl mb-2'>{title}</h1>
                  <p className='text-xs md:text-base line-clamp-2'>{overview}</p>
                  <div className='action flex items-center justify-center gap-3 mt-4'>
                    <button className='px-4 md:px-6 py-[5px] font-bold text-sm bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
                      <span className='icon-fill text-[30px] md:text-[36px]'>play_arrow</span>
                      <span>Play</span>
                    </button>
                    <button className='px-4 md:px-6 py-[5px] font-bold text-sm rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
                      <span className='icon-line text-[30px] md:text-[36px]'>info</span>
                      <span>More Info</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
