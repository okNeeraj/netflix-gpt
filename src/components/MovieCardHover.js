import { TMDB_CDN_URL } from "../services/tmdb";

const MovieCardHover = ({ data, centerPosition, hovered }) => {
  const { title, poster_path, backdrop_path, release_date } = data;
  const releaseYear = release_date.split("-")[0];

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
          <a href="#!" className='inline-block w-full h-full'>
            <img
              src={backdrop_path ? `${TMDB_CDN_URL}/w400${poster_path}` : `${TMDB_CDN_URL}/w400${poster_path}`}
              alt={title}
              className="w-full h-full object-cover" />
          </a>
        </div>
        <div className="detail p-5">
          <div className='actions flex items-center gap-3'>
            <button className='w-10 h-10 flex items-center bg-white hover:bg-gray-200 text-black rounded-full justify-center'>
              <span className='icon-fill text-[36px]'>play_arrow</span>
            </button>
            <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
              <span className='icon-line text-[24px]'>add</span>
            </button>
            <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
              <span className='icon-line text-[20px]'>thumb_up</span>
            </button>
            <div className='ml-auto'>
              <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border border-solid border-gray-500 hover:border-gray-50'>
                <span className='icon-line text-[30px]'>expand_more</span>
              </button>
            </div>
          </div>

          <div className='mt-6'>
            <h4 className='text-white text-md'>{title}</h4>
            <p className='text-sm mt-3'>{releaseYear}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieCardHover;
