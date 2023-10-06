import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import TrendingCard from "./TrendingCard"
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

const TrendingSlider = ({ heading, data }) => {
  if (!data) return;
  const movies = data.results;

  return (
    <div className='movie-slider mb-8'>
      <h4 className='mb-3 text-[20px] text-[#e5e5e5]'>{heading}</h4>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex"
      >
        {
          movies.map((movie, index) => (
            <SwiperSlide key={movie.id} className='cursor-pointer flex-grow-0 flex-shrink-0 w-52 overflow-hidden rounded'>
              <TrendingCard key={movie.id} index={index + 1} data={movie} />
            </SwiperSlide>)
          )
        }
      </Swiper>
    </div>
  )
}

export default TrendingSlider
