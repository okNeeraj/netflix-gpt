import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TMDB_CDN_URL } from "../services/tmdb";
import { createPortal } from "react-dom";
import MovieCardHover from "./MovieCardHover";
import { PAGE } from "../router/routes";
import { NO_POSTER } from "../utils/constants";

const MovieCard = ({ data }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [centerPosition, setCenterPosition] = useState({ left: 0, right: 0, top: 0, bottom: 0 });


  const handleHover = () => {
    if (data !== null) {
      clearTimeout(hoverTimeout);

      hoverTimeout = setTimeout(() => {
        setHovered(true);
        if (cardRef.current) {
          const triggerRect = cardRef.current.getBoundingClientRect();
          const offsetFromTop = triggerRect.top + window.scrollY;
          const positionFromRight = window.innerWidth - triggerRect.right;
          setCenterPosition({
            left: triggerRect.left,
            right: positionFromRight,
            top: offsetFromTop,
            bottom: offsetFromTop,
          });
        }
      }, 1000);
    }
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
  };

  let hoverTimeout;
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize isLargeScreen

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (data === null) return null;

  const { id, title, poster_path, backdrop_path } = data;

  return (
    <div
      className={`movie-card cursor-pointer ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      ref={cardRef}
    >
      <div className='movie-thumb aspect-[2/3] bg-shimmer overflow-hidden rounded'>
        <Link to={`${PAGE.WATCH}/${id}`}>
          <LazyLoadImage src={
            poster_path !== null
              ? `${TMDB_CDN_URL}/w400${poster_path}`
              : backdrop_path !== null
                ? `${TMDB_CDN_URL}/w400${backdrop_path}`
                : NO_POSTER  // Replace with the path to your dummy image
          }
            // width={144} height={216}
            className='hover:scale-110' style={{ transition: '0.9s' }}
            alt={title}
          />
        </Link>
      </div>

      {/* {title === 'The Creator' && */}
      {hovered && isLargeScreen &&
        createPortal(
          <MovieCardHover data={data} centerPosition={centerPosition} hovered={true} />,
          document.body
        )
      }
    </div>
  );
};

export const WithTrending = (MovieCard) => {
  return (props) => {
    const { index } = props;
    return (
      <div className="trending-card relative">
        <div className="text-[200px] trending-number w-full h-full flex justify-start items-center absolute left-0">{index}</div>
        <div className='w-32 ml-auto relative z-10'>
          <MovieCard {...props} />
        </div>
      </div>
    )
  }
}


export default MovieCard;
