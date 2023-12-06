import { Link } from "react-router-dom";
import { PAGE } from "../router/routes";
import { TMDB_CDN_URL } from "../services/tmdb";
import { NO_POSTER } from "../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import getGenresName from "../utils/getGenresName";
import GenreList from "./GenreList";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const MovieCardHover = ({ data, centerPosition, hovered }) => {
  const { id, title, poster_path, backdrop_path, release_date, genre_ids, vote_average } = data;
  const genres = getGenresName(genre_ids);

  const releaseYear = release_date && release_date.split("-")[0];

  let safeTranslateX = '-82px';
  let safeTranslateY = '-50px';

  if (centerPosition.left <= 48) {
    safeTranslateX = '-8px'
  } else if (centerPosition.right <= 48) {
    safeTranslateX = '-168px'
  }

  const hoverCardStyle = {
    left: centerPosition.left,
    top: centerPosition.top,
    transform: `translate(${safeTranslateX}, ${safeTranslateY})`,
  };

  return (
    <div
      className={`movie-hovered absolute w-80 z-[9999] ${hovered && 'hovered'}`}
      style={hoverCardStyle}
    >
      <div className="hover-container bg-[#141414] shadow-md shadow-slate-950 m-2 rounded-md overflow-hidden">
        <div className='h-40 w-full bg-gray-700'>
          <Link to={`${PAGE.WATCH}/${id}`} className='inline-block w-full h-full'>
            <LazyLoadImage
              src={
                poster_path !== null
                  ? `${TMDB_CDN_URL}/w400${poster_path}`
                  : backdrop_path !== null
                    ? `${TMDB_CDN_URL}/w400${backdrop_path}`
                    : NO_POSTER
              }
              alt={title}
              className="w-full h-full object-cover" />
          </Link>
        </div>
        <div className="detail p-5">
          <div className='actions flex items-center gap-3'>
            <Link to={`${PAGE.WATCH}/${id}`} className='w-10 h-10 flex items-center bg-white hover:bg-gray-200 text-black rounded-full justify-center'>
              {/* <span className='icon-fill text-[36px]'>play_arrow</span> */}
              <PlayArrowIcon style={{ fontSize: '24px' }} />
            </Link>
            <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
              {/* <span className='icon-line text-[24px]'>add</span> */}
              <AddIcon style={{ fontSize: '24px' }} />
            </button>
            <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
              {/* <span className='icon-line text-[20px]'>thumb_up</span> */}
              <ThumbUpOffAltIcon style={{ fontSize: '24px' }} />
            </button>
            <div className='ml-auto'>
              <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border border-solid border-gray-500 hover:border-gray-50'>
                {/* <span className='icon-line text-[30px]'>expand_more</span> */}
                <ExpandMoreIcon style={{ fontSize: '24px' }} />
              </button>
            </div>
          </div>

          <div className='mt-6'>
            <h4 className='text-white text-md'>{title}</h4>
            <div className='mt-3'>
              <div className='text-sm'>
                <span className='font-bold text-green-500'>{vote_average} Rating</span>
                <span className='text-gray-400 ml-3'>{releaseYear}</span>
              </div>
              <div className='genres mt-3 [&>*:last-child]:after:content-none text-gray-400'>
                {
                  genres.map((genre) => (
                    <GenreList key={genre} genre={genre} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};


export default MovieCardHover;
