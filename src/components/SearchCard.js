import { TMDB_CDN_URL } from "../services/tmdb";

const SearchCard = ({ data }) => {
  if (data === null) return;
  const { title, poster_path } = data;

  return (
    <div className='overflow-hidden rounded col-span-1 p-2'>
      <img
        src={`${TMDB_CDN_URL}/w400${poster_path}`}
        alt={title}
        className="w-full" />
      {/* <h4 className='p-3'>{title}</h4> */}
    </div>
  )
}

export default SearchCard;
