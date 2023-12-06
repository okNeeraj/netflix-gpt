import VideoBackground from './VideoBackground';
import { TMDB_CDN_URL } from "../services/tmdb";
import { PAGE } from '../router/routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setApp } from '../stores/appSlice';
import getGenresName from '../utils/getGenresName';
import GenreList from './GenreList';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const Showcase = ({ data }) => {
  const isMuted = useSelector((store) => store.app.isMuted);
  const dispatch = useDispatch();

  if (!data) return <div className='mt-16 md:mt-24 lg:mt-32 xl:mt-60'></div>;
  const { id, title, overview, backdrop_path, poster_path, genre_ids } = data?.info;
  const genres = getGenresName(genre_ids);
  const { results } = data?.videos
  const contentId = id;

  const toggleMute = () => {
    dispatch(setApp({ appState: 'isMuted', appData: !isMuted }))
  }

  return (
    <div className={`showcase md:h-screen mt-[-70px] xl:h-auto xl:aspect-video bg-gradient-to-b from-slate-700 xl:mt-[-180pxL] transition-all`}>
      <div className='w-full h-full w-96F h-96F relative'>
        <LazyLoadComponent>
          <VideoBackground videos={results} backdrop={backdrop_path} poster={poster_path} title={title} />
        </LazyLoadComponent>
        <div className='overlay h-full w-full z-10 relative'>
          {/* For Tablet and Desktop */}
          <div className='hidden md:flex bg-rrr w-full h-full items-end pb-[20%]' style={{ background: 'linear-gradient(77deg,rgba(0,0,0,.8),transparent 85%)' }}>
            <div className='px-4 md:px-12 w-full xl:w-1/2 text-white pt-[0px]'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl mb-2 line-clamp-2 font-bold'>{title}</h1>
              <p className='text-sm md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3'>{overview}</p>
              <div className='action flex gap-3 mt-4'>
                <Link to={`${PAGE.WATCH}/${contentId}`} className='px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
                  {/* <span className='icon-fill text-[36px]'>play_arrow</span> */}
                  <PlayArrowIcon style={{ fontSize: '36px' }} />
                  <span>Play</span>
                </Link>
                <button className='px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
                  {/* <span className='icon-line text-[36px]'>info</span> */}
                  <InfoOutlinedIcon style={{ fontSize: '36px' }} />
                  <span>More Info</span>
                </button>
              </div>
            </div>
            <div className='px-4 md:px-12 w-full xl:w-1/2 text-white pt-[0px]'>
              <div className='action flex gap-3 mt-4 justify-end'>
                <button
                  className='w-9 h-9 rounded-full flex items-center justify-center border border-solid border-gray-500/50 hover:border-gray-400 bg-black/5 hover:bg-black/50'
                  onClick={toggleMute}>
                  {/* <span className='icon-line text-[18px]'>{isMuted ? 'volume_off' : 'volume_up'}</span> */}
                  {
                    isMuted ? <VolumeOffIcon style={{ fontSize: '28px' }} /> : <VolumeMuteIcon style={{ fontSize: '28px' }} />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* For Mobile Onlye */}
          <div className='md:hidden bg-rrr pb-16 md:pb-0 backdrop-blur-xl md:backdrop-blur-0 w-full h-full flex items-centerF' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.01) 60%, #141414 100%)' }}>
            <div className='px-4 md:px-12 w-full text-white'>
              <div className='relative h-[415px] max-w-80 m-auto  mt-[140px] rounded-lg overflow-hidden shadow-md'>
                <div className='mobile-cover w-full h-full mt-[-5%]'>
                  <img src={`${TMDB_CDN_URL}/w500${poster_path}`} className='object-cover w-full h-full' alt={title} />
                </div>
                <div className='absolute bottom-0 w-full px-4 pt-20 pb-5 text-center' style={{ backgroundImage: `linear-gradient(0deg, rgb(20, 20, 20) 10%, transparent)` }}>
                  <h1 className='text-2xl font-bold md:text-5xl lg:text-6xl mb-2'>{title}</h1>
                  {/* <p className='text-xs md:text-base line-clamp-2'>{overview}</p> */}
                  <div className='genres mt-3 [&>*:last-child]:after:content-none text-gray-200'>
                    {
                      genres.map((genre) => (
                        <GenreList key={genre} genre={genre} />
                      ))
                    }
                  </div>

                  <div className='action flex items-center justify-center gap-3 mt-4'>
                    <Link to={`${PAGE.WATCH}/${contentId}`} className='px-4 md:px-6 py-[5px] font-bold text-sm bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
                      {/* <span className='icon-fill text-[30px] md:text-[36px]'>play_arrow</span> */}
                      <PlayArrowIcon style={{ fontSize: '30px' }} />
                      <span>Play</span>
                    </Link>
                    <button className='px-4 md:px-6 py-[5px] font-bold text-sm rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
                      {/* <span className='icon-line text-[30px] md:text-[36px]'>info</span> */}
                      <InfoOutlinedIcon style={{ fontSize: '30px' }} />
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
