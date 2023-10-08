import React, { useState, useRef, useEffect } from "react";
import { TMDB_CDN_URL } from "../services/tmdb";
import { createPortal } from "react-dom";
import MovieCardHover from "./MovieCardHover";
import { Link } from "react-router-dom";
import { PAGE } from "../router/routes";

const MovieCard = ({ data }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [centerPosition, setCenterPosition] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  const handleHover = () => {
    setHovered(true);
    const triggerRect = cardRef.current.getBoundingClientRect();
    const offsetFromTop = triggerRect.top + window.scrollY;
    const positionFromRight = window.innerWidth - triggerRect.right;
    setCenterPosition({
      left: triggerRect.left,
      right: positionFromRight,
      top: offsetFromTop,
      bottom: offsetFromTop
    });
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (data === null) return null;

  const { id, title, poster_path } = data;
  if (!poster_path) return null;

  return (
    <div
      className={`movie-card cursor-pointer ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      ref={cardRef}
    >
      <Link to={`${PAGE.WATCH}/${id}`} target="_blank">
        <img
          src={`${TMDB_CDN_URL}/w400${poster_path}`}
          alt={title}
          className="w-full"
        />
      </Link>

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



export default MovieCard;
