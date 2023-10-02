import { TMDB_CDN_URL } from "../services/tmdb";

const SearchCard = ({ data }) => {
  if (data === null) return;
  const { title, poster_path } = data;

  if (!poster_path) return null;

  return (
    <div className='overflow-hidden rounded col-span-1'>
      <img
        src={`${TMDB_CDN_URL}/w400${poster_path}`}
        alt={title}
        className="w-full" />
      {/* <h4 className='p-3'>{title}</h4> */}
    </div>
  )
}

export default SearchCard;
