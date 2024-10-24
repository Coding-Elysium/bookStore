import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
  "Marketing",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch("books.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterData = books.filter((book) => {
    if (selectedCategory === "Choose a genre") {
      return book;
    } else {
      return book.category === selectedCategory.toLowerCase();
    }
  });

  console.log(filterData);

  const dropDown = (e) => {
    setselectedCategory(e.target.value);
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      <div className="mb-8 flex items-center">
        <select
          onChange={dropDown}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 "
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filterData.length > 0 &&
            filterData.map((book, index) => {
              return (
                <SwiperSlide key={index}>
                  <BookCard
                    title={book.title}
                    coverImage={book.coverImage}
                    description={book.description}
                    oldPrice={book.oldPrice}
                    newPrice={book.newPrice}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellers;
