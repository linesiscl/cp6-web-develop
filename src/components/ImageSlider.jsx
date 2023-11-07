import {} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSlider({ images }) {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`Slide ${index}`} className="slideItem" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
