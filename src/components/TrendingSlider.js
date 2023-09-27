import MovieCard from "./MovieCard"

const TrendingSlider = ({ heading, data }) => {
  if (!data) return;
  const movies = data.results;

  return (
    <div className="movie-slider mb-8">
      <h4 className='mb-3 text-[20px] text-[#e5e5e5]'>{heading}</h4>
      <div className="flex gap-4 overflow-auto">
        {
          movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
        }
      </div>
    </div>
  )
}

export default TrendingSlider
