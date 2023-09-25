import { MOVIES } from "../services/tmdb";
import useMovie from "../hooks/useMovie";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoId }) => {
  const { videos } = MOVIES;
  useMovie(`${videoId}/videos`, videos.type);

  const getVideos = useSelector((store) => store.movies.videos);
  if (getVideos === null) return

  const { results } = getVideos;
  const trailers = results.filter((trailer) => trailer.type === "Trailer");
  const trailerKey = trailers[0].key;

  return (
    <div className="absolute bg-green-400 w-full h-full">
      <iframe className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
