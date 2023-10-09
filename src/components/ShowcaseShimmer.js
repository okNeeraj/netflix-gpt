const ShowcaseShimmer = () => {
  return (
    <div
      className={`showcase md:h-screen mt-[-70px] xl:h-auto xl:aspect-video`}
    >
      <div className='w-full h-full w-96F h-96F relative'>
        <div className='overlay h-full w-full z-10 relative'>
          {/* For Tablet and Desktop */}
          <div className='hidden md:flex w-full h-full items-center'>
            <div className='px-4 md:px-12 w-full xl:w-1/2 pt-[0px]'>
              <div className='bg-shimmer h-20 w-full mb-4'></div>
              <div className='bg-shimmer h-4 w-4/5 mb-2'></div>
              <div className='bg-shimmer h-4 w-3/4 mb-2'></div>
              <div className='bg-shimmer h-4 w-2/3 mb-2'></div>
              <div className='action flex gap-3 mt-4'>
                <button className='bg-shimmer w-44 h-12 rounded'></button>
                <button className='bg-shimmer w-44 h-12 rounded'></button>
              </div>
            </div>
          </div>

          {/* For Mobile Onlye */}
          <div className='md:hidden bg-rrr pb-8 md:pb-0 backdrop-blur-xl md:backdrop-blur-0 w-full h-full flex items-centerF'>
            <div className='px-4 md:px-12 w-full'>
              <div className='relative h-[415px] max-w-80 m-auto  mt-[140px] rounded-lg overflow-hidden shadow-md'>
                <div className='absolute bottom-0 w-full px-4 pt-20 pb-5 text-center' style={{ backgroundImage: `linear-gradient(0deg, rgb(20, 20, 20) 10%, transparent)` }}>
                  <div className='bg-shimmer h-7 w-3/4 mb-4 m-auto'></div>
                  <div className='bg-shimmer h-3 w-2/3 mb-2 m-auto'></div>
                  <div className='bg-shimmer h-3 w-1/2 mb-2 m-auto'></div>
                  <div className='action flex items-center justify-center gap-3 mt-4'>
                    <div className='action flex gap-3 mt-4 px-3'>
                      <button className='bg-shimmer min-w-[115px] h-11 rounded'></button>
                      <button className='bg-shimmer min-w-[115px] h-11 rounded'></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShowcaseShimmer;
