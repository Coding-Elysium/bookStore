import React from "react";
import news from "../../data/news.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <div>
                  <Link to="/">
                    <h3 className="text-lg font-medium hover:text-blue-500 mb-4">
                      {items.title}
                    </h3>
                  </Link>
                  <div className="h-[4px] w-10 bg-primary mb-5"></div>
                  <p className="text-sm text-gray-600">{items.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={items.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default News;
