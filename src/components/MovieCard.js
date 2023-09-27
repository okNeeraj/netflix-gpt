import { TMDB_CDN_URL } from "../services/tmdb";

const MovieCard = ({ data }) => {
  if (data === null) return;
  const { title, poster_path } = data;

  return (
    <div className='flex-grow-0 flex-shrink-0 w-36 overflow-hidden rounded'>
      <img
        src={`${TMDB_CDN_URL}/w400${poster_path}`}
        alt={title}
        className="w-full" />
      {/* <h4 className='p-3'>{title}</h4> */}
    </div>
  )
}

export default MovieCard;
