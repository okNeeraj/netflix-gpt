import { useSelector } from "react-redux";
import SearchResult from "../components/SearchResult";
import { MOVIES } from "../services/tmdb";
import useMovie from "../hooks/useMovie";
import { useEffect, useState } from "react";

const Search = () => {
  const [skinOpacity, setSkinOpacity] = useState(1);
  const [searchOpacity, setSearchOpacity] = useState(0);
  const { popular } = MOVIES;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 70;

    if (scrollPosition < threshold) {
      setSkinOpacity(1 - scrollPosition / threshold);
    } else {
      setSkinOpacity(0);
    }

    if (skinOpacity === 0) {
      setSearchOpacity(1);
    } else {
      setSearchOpacity(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skinOpacity]);

  useMovie(popular.endpoint, popular.type);

  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="search-page">
      <div className={`bg-skin w-full h-[430px] absolute top-0 z-10 bg-gradient-to-b from-indigo-800 to-[#141414] transition-colors`} style={{ opacity: `${skinOpacity}` }}></div>
      <div className="search z-20 relative">
        <div className="px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12">
          <h1 className="text-5xl mb-3">Let AI be your Movie Guru!</h1>
          <p className="text-gray-400">Discover Family-Friendly Flicks for a Perfect Movie Night</p>
        </div>
        <div className="px-4 md:px-12 py-3 sticky top-[68px]" style={{ background: `rgba(20, 20, 20, ${searchOpacity})` }}>
          <div className="text-white relative">
            <span className='icon-fill text-[32px] md:text-[36px] absolute left-4 top-3 md:top-5'>search</span>
            <input type="text" placeholder="Search Movies, Show and more" className={`py-4 md:py-6 px-16 w-full bg-gray-600 bg-opacity-70 rounded-[4px] focus:bg-opacity-100 focus-visible:outline-none text-lg`} />
            <span className='icon-fill text-[32px] md:text-[36px] absolute right-4 top-3 md:top-5 cursor-pointer'>close</span>
          </div>
        </div>
        <div className="mt-3 px-4 md:px-12 py-3">
          <SearchResult heading="Popular Searches" data={movies.popular} />
        </div>
      </div>
    </div>

  )
}

export default Search;
