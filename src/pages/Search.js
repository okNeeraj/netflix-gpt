import { useSelector } from "react-redux";
import SearchResult from "../components/SearchResult";
import { MOVIES } from "../services/tmdb";
import useMovie from "../hooks/useMovie";

const Search = () => {
  const { popular } = MOVIES;

  useMovie(popular.endpoint, popular.type);

  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="search px-4 md:px-12 py-3">
      <div className="text-white relative">
        <span className='icon-fill text-[36px] absolute left-4 top-5'>search</span>
        <input type="text" placeholder="Search Movies, Show and more" className={`py-6 px-16 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-lg`} />
        <span className='icon-fill text-[36px] absolute right-4 top-5 cursor-pointer'>close</span>
      </div>
      <div className="mt-6">
        <SearchResult heading="Popular Searches" data={movies.popular} />
      </div>
    </div>
  )
}

export default Search;
