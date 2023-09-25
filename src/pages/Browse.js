import Showcase from '../components/Showcase';
import MovieSlider from '../components/MovieSlider';

const Browse = () => {
  return (
    <div className='broswe-page'>
      <Showcase />
      <div className='moview-by-type px-4 md:px-12 mt-[-130px] z-50 relative'>
        <h4 className='mb-3 text-[20px] text-[#e5e5e5]'>Now Playing</h4>
        <MovieSlider />
      </div>
    </div>
  )
}

export default Browse;
