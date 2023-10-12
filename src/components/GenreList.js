const GenreList = ({ genre }) => {
  return (
    <span
      className='text-xs inline-flex items-center after:content-[" "] after:mx-[6px] after:w-1 after:h-1 after:bg-gray-400 after:rounded-full'>
      {genre}
    </span>
  )
}

export default GenreList;
