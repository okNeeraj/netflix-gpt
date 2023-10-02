import { useSelector } from "react-redux";
import MovieSlider from "./MovieSlider";

const SearchResult = () => {
  const { gptResults, movies } = useSelector((store) => store.search);
  if (!gptResults) return null;

  return (
    <>
      {gptResults.map((title, index) => <MovieSlider key={title} heading={title} data={movies[index]} />)}
    </>
  )
}

export default SearchResult
