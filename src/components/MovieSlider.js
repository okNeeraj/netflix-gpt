import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import MovieCard from "./MovieCard"

SwiperCore.use([Navigation, Pagination]);

const MovieSlider = ({ heading, data }) => {
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);
  const handleResize = () => {
    const slidesInView = Math.floor(window.innerWidth / 144);  // Adjust 200 to your slide width
    setSlidesPerGroup(slidesInView);
  };

  if (!data) return;
  const movies = data.results;

  return (
    <div className="movie-slider mb-8">
      <h4 className='mb-3 text-[20px] text-[#e5e5e5]'>{heading}</h4>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        onResize={handleResize}
        className="mySwiper flex overflow-visibleF"
      >
        {
          movies.map((movie) => (
            <SwiperSlide key={movie.id} className='cursor-pointer flex-grow-0 flex-shrink-0 w-28 md:w-36 overflow-hidden rounded'>
              {<MovieCard data={movie} />}
            </SwiperSlide>)
          )
        }
      </Swiper>
    </div>
  )
}

export default MovieSlider
