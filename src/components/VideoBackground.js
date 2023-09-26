import { MOVIES, TMDB_CDN_URL } from "../services/tmdb";
import useMovie from "../hooks/useMovie";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoId, title, backdrop, poster }) => {
  const { videos } = MOVIES;
  useMovie(`${videoId}/videos`, videos.type);

  const getVideos = useSelector((store) => store.movies.videos);
  if (getVideos === null) return

  const { results } = getVideos;
  const trailers = results.filter((trailer) => trailer.type === "Trailer");
  const trailerKey = trailers[0].key;

  return (
    <div className="absolute w-full h-full lg:h-[820px]">
      <img className="h-full w-full object-cover md:hidden" src={`${TMDB_CDN_URL}/w500${poster}`} alt={title} />
      <img className="h-full w-full object-cover hidden md:block xl:hidden" src={`${TMDB_CDN_URL}/w1280${backdrop}`} alt={title} />
      <div className="w-full h-full hidden xl:block">
        <iframe className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default VideoBackground
