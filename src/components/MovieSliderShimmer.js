const MovieSliderShimmer = ({ dimention }) => {
  return (
    <div className='mb-8 movies-shimmer'>
      <div className='w-48 md:w-64 h-8 bg-shimmer no-animation mb-3'></div>
      <div className='flex gap-4 overflow-hidden'>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
        <div className={`slider-shimmer ${dimention} bg-shimmer aspect-[2/3] flex-grow-0 flex-shrink-0 rounded`}></div>
      </div>
    </div>
  )
}

export default MovieSliderShimmer;
