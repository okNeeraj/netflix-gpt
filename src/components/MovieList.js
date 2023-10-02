import MovieCard from "./MovieCard";

const MovieList = ({ heading, data }) => {
  const { results } = data;

  return (
    <div className="mb-8">
      <h4 className='mb-3 text-[20px] text-[#e5e5e5]'>{heading}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {
          results.map((movie) => <MovieCard key={movie.id} data={movie} />)
        }
      </div>
    </div>
  )
}

export default MovieList
