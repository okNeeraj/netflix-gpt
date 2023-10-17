import { useSelector } from "react-redux";
import { TMDB_CDN_URL } from "../services/tmdb";
import { useEffect, useRef } from "react";

const VideoBackground = ({ videos, title, backdrop, poster }) => {
  const trailers = videos.filter((trailer) => trailer.type === "Trailer");
  const trailerKey = trailers[0]?.key;
  const isMuted = useSelector((store) => store?.app?.isMuted);

  return (
    <div className="absolute w-full h-full">
      <img className="h-full w-full object-cover md:hidden" src={`${TMDB_CDN_URL}/w500${poster}`} alt={title} />
      <img className={`h-full w-full object-cover hidden md:block ${trailerKey && 'xl:hidden'}`} src={`${TMDB_CDN_URL}/w1280${backdrop}`} alt={title} />
      {trailerKey &&
        <div className="w-full h-full hidden xl:block">
          <iframe className="w-full object-cover aspect-video"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      }
    </div >
  )
}

export default VideoBackground
