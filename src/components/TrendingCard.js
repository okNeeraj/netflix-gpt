import { TMDB_CDN_URL } from "../services/tmdb";

const TrendingCard = ({ data, index }) => {
  if (data === null) return;
  const { title, poster_path } = data;

  return (
    <div className='flex-grow-0 flex-shrink-0 w-52 overflow-hidden rounded relative'>
      <div className="text-[200px] trending-number">{index}</div>
      <div className='w-32 absolute right-0 top-1 rounded overflow-hidden'>
        <img
          src={`${TMDB_CDN_URL}/w400${poster_path}`}
          alt={title}
          className="w-full" />
      </div>
    </div>
  )
}

export default TrendingCard;
