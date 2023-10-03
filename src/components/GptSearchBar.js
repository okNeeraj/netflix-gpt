import { useState } from "react"
import openai from "../services/openai";
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { useDispatch } from "react-redux";
import { setGptSearch } from "../stores/searchSlice";

const GptSearchBar = ({ searchOpacity }) => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState('');
  const dispatch = useDispatch();

  const handlePrompt = (event) => {
    setSearchPrompt(event.target.value)
  }

  const handleClearPrompt = () => {
    setSearchPrompt('')
  }

  const searchMovies = async (endpoint, query) => {
    try {
      const response = await fetch(`${TMDB_API_URL}/search/${endpoint}?query=${query}&language=en-US&page=1`, TMDB_OPTIONS);
      const results = await response.json();
      return results;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  const handleSearch = async () => {
    setLoadingBtn(true);
    try {
      const prompt = `
      Act as a movie recommendation system and suggest some movies for the query : ${searchPrompt}.
      Only give me name of 5 movies with comma seperated.
      result should always look like - Spider Man, Elemental, Phir Hera Pheri
    `
      const gptResponse = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
      });

      const gptResults = gptResponse?.choices[0]?.message?.content.split(", ")
      const data = gptResults.map((query) => searchMovies('movie', query));
      const searchResults = await Promise.all(data);

      if (searchResults) {
        setLoadingBtn(false)
      }

      dispatch(setGptSearch({ searchResults: gptResults, actionType: 'gptResults' }))
      dispatch(setGptSearch({ searchResults: searchResults, actionType: 'movies' }))
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className="px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12">
        <h1 className="text-5xl mb-3">Let AI be your Movie Guru!</h1>
        <p className="text-gray-400">Discover Family-Friendly Flicks for a Perfect Movie Night</p>
      </div>
      <div className="px-4 md:px-12 py-3 sticky top-[68px]" style={{ background: `rgba(20, 20, 20, ${searchOpacity})` }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-1">
            <div className="text-white relative w-full">
              <span className='icon-fill text-[32px] md:text-[36px] absolute left-4 top-3 md:top-5'>search</span>
              <input
                type="text"
                placeholder="Search Movies, Show and more"
                className={`py-4 md:py-6 px-16 w-full bg-gray-600 bg-opacity-70 rounded focus:bg-opacity-100 focus-visible:outline-none text-lg`}
                onChange={handlePrompt}
                value={searchPrompt}
              />

              {searchPrompt && <span className='icon-fill text-[32px] md:text-[36px] absolute right-4 top-3 md:top-5 cursor-pointer' onClick={handleClearPrompt}>close</span>}
            </div>
            <button
              className={`py-4 md:py-6 w-24 px-5 bg-red-primary rounded text-white disabled:bg-red-800`}
              onClick={handleSearch}
              disabled={searchPrompt === '' ? true : false}
            >
              {
                loadingBtn ? <div className="w-5 h-5 border-t m-auto border-gray-300 border-solid rounded-full animate-spin"></div> : 'Search'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default GptSearchBar