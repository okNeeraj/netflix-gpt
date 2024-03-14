import { useState } from "react"
import openai from "../services/openai";
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { setGptSearch } from "../stores/searchSlice";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';

const GptSearchBar = ({ searchOpacity }) => {
  const userEmail = useSelector((store) => store?.user?.email);
  const [user, setUser] = useState(userEmail)
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
    if (user === 'gpt4@gmail.com') {
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
    } else { // GPT will not work for all user
      const searchTerm = [searchPrompt];
      const data = searchTerm.map((query) => searchMovies('movie', query));
      const searchResults = await Promise.all(data);

      if (searchResults) {
        setLoadingBtn(false)
      }

      dispatch(setGptSearch({ searchResults: searchTerm, actionType: 'gptResults' }))
      dispatch(setGptSearch({ searchResults: searchResults, actionType: 'movies' }))
    }
  }

  return (
    <>
      <div className="px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12">
        <h1 className="text-3xl md:text-5xl mb-3 font-bold">Let AI be your Movie Guru!</h1>
        <p className="text-gray-400 text-sm md:text-lg">Discover Family-Friendly Flicks for a Perfect Movie Night</p>
      </div>
      <div className="px-4 md:px-12 py-3 sticky top-[68px] z-[99999]" style={{ background: `rgba(20, 20, 20, ${searchOpacity})` }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-1">
            <div className="text-white relative w-full">
              <span className='icon-fill text-gray-400 text-[22px] md:mt-0 md:text-[36px] absolute left-4 top-[16px] md:top-5 hidden md:block'>
                <SearchOutlinedIcon style={{ fontSize: '32px' }} />
              </span>
              <input
                type="text"
                placeholder="Search Movies, Show and more"
                className={`py-4 md:py-6 pl-4 pr-12 md:px-14 w-full bg-gray-600 bg-opacity-70 rounded focus:bg-opacity-100 focus-visible:outline-none text-lg`}
                onChange={handlePrompt}
                value={searchPrompt}
              />

              {searchPrompt && <span className='icon-fill text-[28px] mt-0 md:text-[36px] absolute right-4 top-4 md:top-5 cursor-pointer' onClick={handleClearPrompt}>
                <CloseIcon style={{ fontSize: '32px' }} />
              </span>}
            </div>
            <button
              className={`py-4 md:py-6 w-24 px-2 md:px-5 flex items-center justify-center bg-red-primary rounded text-white disabled:bg-red-800`}
              onClick={handleSearch}
              disabled={searchPrompt === '' ? true : false}
            >
              {
                loadingBtn ?
                  <div className="w-5 h-5 border-t m border-gray-300 border-solid rounded-full animate-spin"></div>
                  :
                  <>
                    <span className='icon-fill text-[22px] md:text-[32px] md:hidden'>
                      <SearchOutlinedIcon style={{ fontSize: '28px' }} />
                    </span>
                    <span className='hidden md:inline-block'>Search</span>
                  </>
              }
            </button>
          </div>
          <p className='text-xs mt-1'>
            Note: Movie recommendations powered by GPT are available on request due to paid APIs.
            <a href="https://www.linkedin.com/in/okneerajsingh/" target="_blank" rel="noreferrer" className='ml-2 text-sm text-gray-400 hover:text-gray-200'>Request now</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default GptSearchBar
