import { useState, useEffect } from "react";
import { TMDB_CDN_URL } from "../services/tmdb";
import { useRef } from "react";

const MovieCard = ({ data }) => {
  const [centerPosition, setCenterPosition] = useState({ left: 0, top: 0 });

  const handleHover = (event) => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = event.target;
    const centerLeft = offsetLeft + offsetWidth / 2;
    const centerTop = offsetTop + offsetHeight / 2;
    setCenterPosition({ left: centerLeft, top: centerTop });
  };

  const handleLeave = () => {
    setCenterPosition({ left: 0, top: 0 })
  }

  if (data === null) return null;

  const { title, poster_path } = data;

  if (!poster_path) return null;

  return (
    <div
      className='cursor-pointer flex-grow-0 flex-shrink-0 w-28F md:w-36F w-full overflow-hidden rounded'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src={`${TMDB_CDN_URL}/w400${poster_path}`}
        alt={title}
        className="w-full"
      />

      {/* {centerPosition.left !== 0 && (
        <div
          className='absolute w-80 z-[9999] rounded-md bg-[#141414] overflow-hidden shadow-md shadow-slate-950'
          style={{ left: centerPosition.left - 192, top: centerPosition.top - 150, transition: '1s' }}>
          <MovieCardHover data={data} />
        </div>
      )} */}
    </div>
  );
};

const MovieCardHover = ({ data }) => {
  const { title, backdrop_path, release_date } = data;
  const releaseYear = release_date.split('-')[0];

  return (
    <div className="hover-card">
      <div className='h-40 w-full'>
        <a href="#!" className='inline-block w-full h-full'>
          <img
            src={`${TMDB_CDN_URL}/w400${backdrop_path}`}
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
  )
}

export default MovieCard;
