import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4 ">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${props._id}`}>
            <img
              src={`${getImgUrl(props.coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div>
          <Link to={`/books/${props._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {props.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {props.description.length > 80
              ? `${props.description.slice(0, 80)}...`
              : props.description}
          </p>
          <p className="font-medium mb-5">
            {props.newPrice}
            <span className="line-through font-normal ml-2">
              {props.oldPrice}
            </span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FaShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
