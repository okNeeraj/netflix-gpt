import { useEffect } from "react";
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb"

const VideoBackground = ({ videoId }) => {
  const getMovieVideos = async () => {
    const response = await fetch(`${TMDB_API_URL}/movie/${videoId}/videos`, TMDB_OPTIONS);
    const result = await response.json();
    const { results } = result;
    const trailers = results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? 'https://images.wallpapersden.com/image/wxl-blue-beetle-poster_90672.jpg' : trailers[0]
    console.log(trailer)
  }
  useEffect(() => {
    getMovieVideos()
  }, []);

  return (
    <div className="absolute bg-green-400 w-full h-full">
      <img className="w-full object-cover h-full" src="https://cdn.shortpixel.ai/spai/q_glossy+w_998+to_webp+ret_img/thecosmiccircus.com/wp-content/uploads/2023/08/Untitled-design-22-800x445.jpg" alt="title" />
      {/* VideoBackground */}
    </div>
  )
}

export default VideoBackground
