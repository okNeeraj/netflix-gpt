import { TMDB_CDN_URL } from "../services/tmdb";

const MovieCard = ({ data }) => {
  // console.log(data[0])
  const { title, poster_path } = data;
  return (
    <div className='flex-grow-0 flex-shrink-0 w-2/12 overflow-hidden rounded'>
      <img
        src={`${TMDB_CDN_URL}/w400${poster_path}`}
        alt={title}
        className="w-full" />
      {/* <h4 className='p-3'>{title}</h4> */}
    </div>
  )
}

export default MovieCard;
