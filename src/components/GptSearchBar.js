import { useState } from "react"
import openai from "../services/openai";

const GptSearchBar = ({ searchOpacity }) => {
  const [searchPrompt, setSearchPrompt] = useState('');

  const handlePrompt = (event) => {
    setSearchPrompt(event.target.value)
  }

  const handleClearPrompt = () => {
    setSearchPrompt('')
  }

  const handleSearch = async () => {
    try {
      const prompt = `
      Act as a movie recommendation system and suggest some movies for the query : ${searchPrompt}.
      Only give me name of 5 movies with comma seperated.
      result should always look like - ["Spider Man", "Elemental", "Phir Hera Pheri"]
    `
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults?.choices)
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
              className={`py-4 md:py-6 px-5 bg-red-primary rounded text-white disabled:bg-red-800`}
              onClick={handleSearch}
              disabled={searchPrompt === '' ? true : false}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default GptSearchBar
