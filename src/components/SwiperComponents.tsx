import React from 'react';
import '../App.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponents = ({ isPending, data }) => {
  return (
    <>
      <div className="diiv-2">
        <Swiper
          className="swip"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          watchOverflow={true}
          navigation
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {isPending ? (
            <div className="pending">
              <div>
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            data &&
            data.map((item) => {
              return (
                <SwiperSlide className="swwiiip" key={item.text}>
                  <div className="yearStyle">{item.year}</div>
                  <div className="textStyle">{item.text}</div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComponents;
